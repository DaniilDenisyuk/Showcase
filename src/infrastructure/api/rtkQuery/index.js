import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const apiRtkQuery = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' })
})
