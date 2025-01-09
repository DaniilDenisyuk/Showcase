import { ManagerContext } from '../repository/common'
import Host from './Host'
import Manager from './Manager'
import PortalC from './Portal'

const Portal = {
  Host,
  Portal: PortalC,
  Manager,
  ManagerContext
}

export default Portal
