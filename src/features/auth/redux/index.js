import { createSlice } from '@reduxjs/toolkit'
import { flow, pick } from 'lodash-es'
import { useSelector } from 'react-redux'

const initialState = {
  isInitialized: false,
  email: null,
  name: null,
  token: null
}

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initialized: (state) => {
      state.isInitialized = true
    },
    signedIn: (_, { payload }) => {
      return pick(payload, Object.keys(initialState))
    },
    signedOut: () => {
      return initialState
    }
  }
})

export const selectIsSignedIn = flow(slice.selectSlice, ({ token }) => !!token)

export const useIsSignedIn = () => useSelector(selectIsSignedIn)
export const useIsSignedOut = () => {
  const isSignedIn = useSelector(selectIsSignedIn)
  return !isSignedIn
}

export const authRedux = { selectIsSignedIn, useIsSignedIn, slice }
