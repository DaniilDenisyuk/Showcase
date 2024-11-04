import { createSlice } from '@reduxjs/toolkit'
import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mergeNoUndef } from '../../common/repository/utils'
import { rootReducer } from '../../redux/repository'
import { defaultType, typeComponentMap } from '../repository'

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

export const useSetLayout = ({ type }) => {
  const dispatch = useDispatch()
  useLayoutEffect(() => {
    dispatch(slice.actions.mergeState({ type }))
  }, [type])
}

export const useLayout = () => {
  const { type } = useSelector(slice.selectSlice)
  const Component = typeComponentMap[type]
  return { Component, type }
}

export const layoutRedux = {
  useSetLayout,
  useLayout,
  slice
}
