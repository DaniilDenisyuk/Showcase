import { layoutRepo } from '../../../infrastructure/layout/repository'
import LayoutGuest from '../components/LayoutGuest'
import LayoutUser from '../components/LayoutUser'

export const typeMap = {
  guest: 'guest',
  user: 'user'
}

layoutRepo.typeComponentMap[typeMap.user] = LayoutUser
layoutRepo.typeComponentMap[typeMap.guest] = LayoutGuest

export const authLayout = {
  typeMap
}
