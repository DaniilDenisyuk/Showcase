import { createContext, useEffect, useMemo, useRef } from 'react'
import { ScrollView as ScrollViewRN } from 'react-native-gesture-handler'

const Context = createContext({
  onScroll: () => {}
})

export default function ScrollView({ children, onScroll, ...rest }) {
  const listeners = useRef(new WeakSet())
  useEffect(() => {
    if (!onScroll) {
      return
    }
    listeners.add(onScroll)
    return () => {
      listeners.remove(onScroll)
    }
  }, [onScroll])
  const context = useMemo(
    () => ({
      onScroll: (listener) => {
        listeners.current.add(listener)
        return () => {
          listeners.current.delete(listener)
        }
      }
    }),
    []
  )
  return (
    <ScrollViewRN
      onScroll={(e) => {
        ;[...listeners].forEach((listener) => listener(e))
      }}
      {...rest}
    >
      <Context.Provider value={context}>{children}</Context.Provider>
    </ScrollViewRN>
  )
}

ScrollView.Context = Context
