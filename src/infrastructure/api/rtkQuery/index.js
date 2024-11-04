import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { rootReducer } from '../../redux/repository'
import { url } from '../repository'

const defaultBaseQuery = fetchBaseQuery({
  baseUrl: url
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
