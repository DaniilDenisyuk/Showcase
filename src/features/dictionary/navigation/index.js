import { navRepo } from '../../../infrastructure/navigation/repository'
import DictionaryScreen from '../components/DictionaryScreen'

export const screenName = 'Dictionary'

navRepo.screens[screenName] = DictionaryScreen
