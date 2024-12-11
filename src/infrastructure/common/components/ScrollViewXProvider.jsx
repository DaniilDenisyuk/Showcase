import { createContext, useEffect, useMemo, useRef } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Context = createContext({
  onScroll: () => {}
})

export default function ScrollViewXProvider({ children, onScroll, ...rest }) {
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
    <Context.Provider value={context}>
      <ScrollView
        onScroll={(e) => {
          ;[...listeners].forEach((listener) => listener(e))
        }}
        {...rest}
      >
        {children}
      </ScrollView>
    </Context.Provider>
  )
}

ScrollViewXProvider.Context = Context
