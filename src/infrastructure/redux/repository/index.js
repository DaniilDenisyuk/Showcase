import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { apiRtkQuery } from '../../api/rtkQuery'

export const store = configureStore({
  reducer: {
    [apiRtkQuery.reducerPath]: apiRtkQuery.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiRtkQuery.middleware)
})

setupListeners(store.dispatch)
