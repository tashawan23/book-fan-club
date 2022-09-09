import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isEditor: false,
    isAdmin: false,
  },
  reducers: {
    updateRole: (state, action) => {
        if (action.payload === 'admin') {
            state.isAdmin = true;
        } else if (action.payload === 'editor') {
            state.isEditor = true;
        }
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateRole } = loginSlice.actions

export default loginSlice.reducer