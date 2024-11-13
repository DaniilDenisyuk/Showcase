import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { API_BASE_URL } from '../../common/repository/env'
import { rootReducer } from '../../redux/repository'

const defaultBaseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL
})

let baseQuery = defaultBaseQuery

export function setBaseQuery(value) {
  baseQuery = value
}

export const slice = createApi({
  reducerPath: 'api',
  baseQuery(...args) {
    return baseQuery(...args)
  }
})

export const apiRTKQuery = {
  defaultBaseQuery,
  setBaseQuery,
  slice
}

rootReducer.inject(slice)
