import { createContext } from 'react'

export const ManagerContext = createContext({
  subscriberDataRef: { current: null },
  subscribe: () => {}
})
