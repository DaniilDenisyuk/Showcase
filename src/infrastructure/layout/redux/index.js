import { createSlice } from '@reduxjs/toolkit'
import { merge } from 'lodash-es'
import { rootReducer } from '../../redux/repository'

export const slice = createSlice({
  name: 'layout',
  initialState: {
    type: null
  },
  reducers: {
    mergeState: (state, { payload }) => {
      merge(state, payload)
    }
  }
})

rootReducer.inject(slice)

export const layoutRedux = {
  slice
}
