import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'
import { useEffect } from 'react'
import { getGenericPassword } from 'react-native-keychain'
import { useDispatch, useSelector } from 'react-redux'
import { apiRTKQuery } from '../../../infrastructure/api/rtkQuery'
import { API_BASE_URL } from '../../../infrastructure/common/repository/env'
import { authRTK } from '../rtk'

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders(headers, { getState }) {
    const { token } = authRTK.slice.selectSlice(getState())
    if (token) {
      return { ...headers, ['Authorization']: `Bearer: ${token}` }
    }
    return headers
  }
})

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)
  if (
    result.error &&
    result.error.status === 401 &&
    authRTK.selectIsSignedIn(api.getState())
  ) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const credentials = await getGenericPassword()
        if (credentials) {
          const { username: email, password } = credentials
          const resp = await baseQuery(
            {
              url: 'singIn',
              method: 'POST',
              body: { email, password }
            },
            api,
            extraOptions
          )
          if (resp.data) {
            api.dispatch(authRTK.slice.actions.signedIn(resp.data))
            result = await baseQuery(args, api, extraOptions)
          } else {
            api.dispatch(authRTK.slice.actions.signedOut())
          }
        } else {
          api.dispatch(authRTK.slice.actions.signedOut())
        }
      } catch {
        api.dispatch(authRTK.slice.actions.signedOut())
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}

apiRTKQuery.setBaseQuery(baseQueryWithReAuth)

export const slice = apiRTKQuery.slice.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (credentials) => ({
        url: 'singin',
        method: 'POST',
        body: credentials
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const resp = await queryFulfilled
          dispatch(authRTK.slice.actions.signedIn(resp.data))
        } catch (e) {
          e
        }
      }
    }),
    signOut: build.mutation({
      query: () => ({
        url: 'signout',
        method: 'POST'
      })
    }),
    singUp: build.mutation({
      query: (data) => ({
        url: 'singup',
        method: 'POST',
        body: data
      })
    })
  })
})

export const useInitialize = () => {
  const dispatch = useDispatch()
  const { isInitialized } = useSelector(authRTK.slice.selectSlice())
  useEffect(() => {
    if (isInitialized) {
      return
    }
    ;(async () => {
      const credentials = await getGenericPassword()
      if (credentials) {
        const { username: email, password } = credentials
        dispatch(slice.endpoints.signIn({ email, password }))
      }
      dispatch(authRTK.slice.actions.initialized())
    })()
  }, [isInitialized])
  return
}

export const authRTKQuery = {
  slice,
  useInitialize
}
