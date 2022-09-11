import { randomCreatedDate } from '@mui/x-data-grid-generator';
import { createSlice } from '@reduxjs/toolkit'
import { USERS } from '../data/data'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    arr: USERS
  },
  reducers: {
    addUser: (state, action) => {
      let user = {...action.payload}
      user.id = state.arr.length + 1;
      user.joinDate = randomCreatedDate()
      state.arr = state.arr.concat(user)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions

export default userSlice.reducer

