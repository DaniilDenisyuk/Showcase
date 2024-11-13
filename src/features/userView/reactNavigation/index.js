import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { merge } from 'lodash-es'
import { navRepo } from '../../../infrastructure/reactNavigation/repository'
import LayoutManager from '../../auth/components/LayoutManager'
import { useIsSignedIn } from '../../auth/rtk'
import Header from '../components/NavHeader'
import TabBar from '../components/TabBar'
import UserLayout from '../components/UserLayout'

const defaultScreenOptions = {
  header: Header,
  layout: UserLayout,
  tabBar: TabBar,
  animation: 'fade'
}

export const config = {
  backBehavior: 'history',
  screenOptions: defaultScreenOptions,
  screens: {}
}

export const init = () => {
  merge(navRepo.config, {
    groups: {
      User: {
        if: useIsSignedIn,
        screens: {
          Home: createBottomTabNavigator(config)
        }
      }
    },
    layout: LayoutManager
  })
}

export const userViewRNav = {
  init,
  config
}
