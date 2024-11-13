import { apiRTKQuery } from '../../../infrastructure/api/rtkQuery'

export const wordRtkQuery = apiRTKQuery.slice.injectEndpoints({
  endpoints: (build) => ({
    getCategoryList: build.query({
      query: (options) => ({
        url: 'words/categories',
        ...options
      })
    }),
    getList: build.query({
      query: (options) => ({
        url: 'words/own',
        ...options
      })
    }),
    getForeignList: build.query({
      query: (options) => ({
        url: 'words/all',
        ...options
      })
    }),
    getStatistics: build.query({
      query: () => ({
        url: 'words/statistics'
      })
    }),
    getTaskList: build.query({
      query: () => ({
        url: 'words/tasks'
      })
    }),
    createWord: build.mutation({
      query: (options) => ({
        url: 'words/create',
        method: 'POST',
        ...options
      })
    }),
    addForeignWord: build.mutation({
      query: (id, options) => ({
        url: `words/add/${id}`,
        method: 'POST',
        ...options
      })
    }),
    updateWord: build.mutation({
      query: (id, options) => ({
        url: `words/edit/${id}`,
        method: 'PATCH',
        ...options
      })
    }),
    deleteWord: build.mutation({
      query: (id, options) => ({
        url: `words/delete/${id}`,
        method: 'DELETE',
        ...options
      })
    }),
    postAnswers: build.mutation({
      query: (options) => ({
        url: 'words/answers',
        method: 'POST',
        ...options
      })
    })
  })
})
