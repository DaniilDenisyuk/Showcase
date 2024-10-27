import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { config } from '../repository'

const RootStack = createNativeStackNavigator(config)

export default createStaticNavigation(RootStack)
