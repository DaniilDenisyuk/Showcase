import { createSlice } from '@reduxjs/toolkit'
import { flow, get } from 'lodash-es'

const initialFilter = {
  keyword: undefined,
  category: undefined,
  isIrregular: undefined
}

const initialState = {
  dictionaryFilter: { ...initialFilter },
  recommendFilter: { ...initialFilter }
}

export const slice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    setDictionaryFilter: (state, { payload }) => {
      Object.assign(state.dictionaryFilter, payload)
    },
    setRecommendFilter: (state, { payload }) => {
      Object.assign(state.recommendFilter, payload)
    }
  }
})

export const selectDictionaryFilter = flow(
  slice.selectSlice,
  get('dictionaryFilter')
)

export const selectRecommendFilter = flow(
  slice.selectSlice,
  get('recommendFilter')
)

export const wordRTK = { slice, selectDictionaryFilter, selectRecommendFilter }
