import { createSlice } from '@reduxjs/toolkit'
import { USERS } from '../data/users'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    arr: USERS
  },
  reducers: {
    addUser: (state, action) => {
      state.arr = state.arr.concat(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions

export default userSlice.reducer

