import { apiRTKQuery } from '../../../infrastructure/api/rtkQuery'

export const categoryRtkQuery = apiRTKQuery.slice.injectEndpoints({
  endpoints: (build) => ({
    getList: build.query({
      query: () => ({
        url: 'words/categories'
      })
    })
  })
})
