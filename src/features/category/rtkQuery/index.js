import { apiRtkQuery } from '../../../infrastructure/api/rtkQuery'

export const categoryRtkQuery = apiRtkQuery.injectEndpoints({
  endpoints: (build) => ({
    getList: build.query({
      query: () => ({
        url: 'words/categories'
      })
    })
  })
})
