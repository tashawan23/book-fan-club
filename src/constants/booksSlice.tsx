import { createSlice } from "@reduxjs/toolkit";
import { BOOKS } from "../data/data";

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    arr: BOOKS,
  },
  reducers: {
    addBook: (state, action) => {
      let book = { ...action.payload };
      book.id = state.arr.length + 1;
      book.status = "Available"
      state.arr = state.arr.concat(book);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
