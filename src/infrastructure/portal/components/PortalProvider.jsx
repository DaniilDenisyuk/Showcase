import { useMemo, useRef, useState } from 'react'
import { immutableSplice } from '../../common/repository/utils'
import { Context } from '../repository'

export default function PortalProvider({ children }) {
  const [portaled, setPortaled] = useState([])
  const idIndexMapRef = useRef({})
  const context = useMemo(
    () => ({
      portal: (id, el) => {
        setPortaled((arr) => {
          const index = idIndexMapRef.current[id]
          if (!index) {
            idIndexMapRef[id] = arr.length
            return [...arr, el]
          }
          return immutableSplice(arr, index, 1, el)
        })
      }
    }),
    []
  )
  return (
    <Context.Provider value={context}>
      {children}
      {portaled}
    </Context.Provider>
  )
}
