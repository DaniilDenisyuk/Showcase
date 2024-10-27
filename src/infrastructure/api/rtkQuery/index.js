import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { rootReducer } from '../../redux/repository'

export const apiRtkQuerySlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://vocab-builder-backend.p.goit.global/api'
  })
})

rootReducer.inject(slice)
