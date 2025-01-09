import { useContext, useEffect, useId, useMemo, useRef, useState } from 'react'
import { ManagerContext } from './common'

export const useManager = () => {
  const tempNodeMapRef = useRef({})
  const defaultHostRef = useRef({
    portal: (key, children) => {
      tempNodeMapRef.current[key] = children
    },
    remove: (key) => {
      delete tempNodeMapRef.current[key]
    }
  })
  const [host, setHost] = useState(defaultHostRef.current)
  return useMemo({ host, tempNodeMapRef, defaultHostRef, setHost }, [host])
}

export const useManagerContext = useContext(ManagerContext)

export const useHost = () => {
  const [nodeMap, setNodeMap] = useState({})
  const { setHost, tempNodeMapRef, defaultHostRef } = useManagerContext()
  useEffect(() => {
    setHost({
      portal: (key, children) => {
        setNodeMap({ ...nodeMap, [key]: children })
      },
      remove: (key) => {
        delete nodeMap[key]
        setNodeMap({ ...nodeMap })
      }
    })
    setNodeMap(tempNodeMapRef.current)
    tempNodeMapRef.current = {}
    return () => setHost(defaultHostRef.current)
  }, [])
  return { nodeMap }
}

export const usePortal = ({ children }) => {
  const {
    host: { portal, remove }
  } = useManagerContext()
  const id = useId()
  useEffect(() => {
    portal(id, children)
  }, [children])
  useEffect(() => {
    return () => {
      remove(id)
    }
  })
  return {}
}
