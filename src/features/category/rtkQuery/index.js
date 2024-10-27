import { apiRtkQuerySlice } from '../../../infrastructure/api/rtkQuery'

export const categoryRtkQuery = apiRtkQuerySlice.injectEndpoints({
  endpoints: (build) => ({
    getList: build.query({
      query: () => ({
        url: 'words/categories'
      })
    })
  })
})
