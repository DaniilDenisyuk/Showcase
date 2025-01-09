import { ManagerContext } from '../repository/common'
import { useManager } from '../repository/hooks'

export default function Manager() {
  const manager = useManager()
  return <ManagerContext.Provider value={manager}></ManagerContext.Provider>
}
