import { merge } from 'lodash-es'
import { lazy } from 'react'
import { navRepo } from '../../../infrastructure/reactNavigation/repository'
import LayoutManager from '../../auth/components/LayoutManager'
import { useIsSignedIn, useIsSignedOut } from '../rtk'

export const screenNameMap = { Login: 'Login', Registration: 'Registration' }

export const signedOutGroup = {
  if: useIsSignedOut,
  screens: {
    [screenNameMap.Login]: {
      screen: lazy(() => import('../../auth/components/LoginScreen')),
      linking: {
        path: 'login'
      }
    },
    [screenNameMap.Registration]: {
      screen: lazy(() => import('../../auth/components/RegistrationScreen')),
      linking: {
        path: 'registration'
      }
    }
  }
}

merge(navRepo.config, {
  groups: {
    SignedIn: signedInGroup,
    SignedOut: signedOutGroup
  },
  layout: LayoutManager
})

export const signedInGroup = {
  if: useIsSignedIn,
  screens: {}
}

export const userLayoutNav = {
  signedInGroup,
  signedOutGroup
}
