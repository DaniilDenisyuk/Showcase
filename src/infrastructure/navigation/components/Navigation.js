import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screens } from '../repository'

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens
})

export default createStaticNavigation(RootStack)
