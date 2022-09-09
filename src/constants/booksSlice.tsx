import { createSlice } from '@reduxjs/toolkit'
import { BOOKS } from '../data/users'

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    arr: BOOKS
  },
  reducers: {
    addBook: (state, action) => {
      state.arr = state.arr.concat(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addBook } = bookSlice.actions

export default bookSlice.reducer