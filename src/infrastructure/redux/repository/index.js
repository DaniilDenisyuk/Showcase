import { combineSlices, configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { apiRtkQuerySlice } from '../../api/rtkQuery'

export const rootReducer = combineSlices()

export const store = configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiRtkQuerySlice.middleware)
})

setupListeners(store.dispatch)
