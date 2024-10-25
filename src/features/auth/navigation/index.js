import { navRepo } from '../../../infrastructure/navigation/repository'
import LoginScreen from '../components/LoginScreen'
import RegistrationScreen from '../components/RegistrationScreen'

export const loginScreenName = 'Login'

export const registrationScreenName = 'Registration'

navRepo[loginScreenName] = LoginScreen

navRepo[registrationScreenName] = RegistrationScreen
