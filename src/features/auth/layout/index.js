import { layoutRepo } from '../../../infrastructure/layout/repository'
import GuestLayout from '../components/GuestLayout'
import UserLayout from '../components/UserLayout'

export const typeMap = {
  guest: 'guest',
  user: 'user'
}

layoutRepo.typeComponentMap[typeMap.user] = UserLayout
layoutRepo.typeComponentMap[typeMap.guest] = GuestLayout

export const authLayout = {
  typeMap
}
