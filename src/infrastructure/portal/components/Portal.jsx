import {
  createContext,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState
} from 'react'

import { immutableSplice } from '../../common/repository/utils'

const Context = createContext({
  portal: () => {}
})

function Provider({ children }) {
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

export default function TopPortal({ children }) {
  const { portal } = useContext(Context)
  const id = useId()
  useEffect(() => {
    portal(id, children)
  }, [children])
  return null
}

TopPortal.Provider = Provider

TopPortal.Context = Context
