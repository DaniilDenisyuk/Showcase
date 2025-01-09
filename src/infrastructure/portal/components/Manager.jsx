import { useManager } from '../../popup/floatingUI'
import { Context } from '../../popup/repository'

export default function Manager({ children }) {
  const manager = useManager()
  return <Context.Provider value={manager}>{children}</Context.Provider>
}
