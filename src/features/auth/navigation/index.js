import { merge } from 'lodash-es'
import { lazy } from 'react'
import { navRepo } from '../../../infrastructure/navigation/repository'
import LayoutManager from '../components/LayoutManager'
import { useIsSignedIn, useIsSignedOut } from '../redux'

export const screenNameMap = { Login: 'Login', Registration: 'Registration' }

export const signedInGroup = {
  if: useIsSignedIn,
  screens: {}
}

export const signedOutGroup = {
  if: useIsSignedOut,
  screens: {
    [screenNameMap.Login]: {
      screen: lazy(() => import('../components/LoginScreen')),
      linking: {
        path: 'login'
      }
    },
    [screenNameMap.Registration]: {
      screen: lazy(() => import('../components/RegistrationScreen')),
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

export const authNav = {
  signedInGroup,
  signedOutGroup
}
