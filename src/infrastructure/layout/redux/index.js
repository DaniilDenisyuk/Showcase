import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'layout',
  initialState: {
    type: 'guest'
  }
})

export const layoutRedux = {
  slice
}
