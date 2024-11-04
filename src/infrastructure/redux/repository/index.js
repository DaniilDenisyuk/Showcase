import { combineSlices, configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { apiRTKQuery } from '../../api/rtkQuery'

export const rootReducer = combineSlices()

export const store = configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiRTKQuery.slice.middleware)
})

setupListeners(store.dispatch)
