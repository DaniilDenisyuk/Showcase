import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { APP_BASE_URL } from '../../common/repository/env'
import { config } from '../repository'

const RootStack = createNativeStackNavigator(config)

const NavigationBase = createStaticNavigation(RootStack)

const linking = {
  enabled: 'auto',
  prefixes: [APP_BASE_URL]
}

export default function Navigation() {
  return <NavigationBase linking={linking} />
}
