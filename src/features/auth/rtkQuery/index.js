import { apiRtkQuerySlice } from '../../../infrastructure/api/rtkQuery'

export const authRtkQuery = apiRtkQuerySlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({
        url: 'login',
        method: 'POST',
        body: data
      })
    }),
    logout: build.mutation({
      query: (data) => ({
        url: 'logout',
        method: 'POST',
        body: data
      })
    }),
    register: build.mutation({
      query: (data) => ({
        url: 'register',
        method: 'POST',
        body: data
      })
    })
  })
})
