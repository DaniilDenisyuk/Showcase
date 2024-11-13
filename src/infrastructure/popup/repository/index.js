import { createContext, useContext } from 'react'

export const Context = createContext({
  isOpened: false,
  toggle: () => {},
  setIsOpened: () => {},
  floatingContext: {}
})

export const useManagerContext = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Popup components must be wrapped in <Popup.Provider />')
  }
  return context
}
