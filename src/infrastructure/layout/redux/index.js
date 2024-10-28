import { createSlice } from '@reduxjs/toolkit'
import { mergeNoUndef } from '../../common/repository/utils'
import { rootReducer } from '../../redux/repository'
import { defaultType } from '../repository'

export const slice = createSlice({
  name: 'layout',
  initialState: {
    type: defaultType
  },
  reducers: {
    mergeState: (state, { payload }) => {
      mergeNoUndef(state, payload)
    }
  }
})

rootReducer.inject(slice)

export const layoutRedux = {
  slice
}
