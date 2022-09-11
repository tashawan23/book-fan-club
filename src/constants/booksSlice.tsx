import { createSlice } from "@reduxjs/toolkit";
import { BOOKS, BOOK_STATUS } from "../data/data";

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    arr: BOOKS,
  },
  reducers: {
    addBook: (state, action) => {
      let book = { ...action.payload };
      book.id = state.arr.length + 1;
      book.status = "Available";
      state.arr = state.arr.concat(book);
    },

    borrowBook: (state, action) => {
      let temp = [...state.arr];
      temp = temp.map((book) => {
        return book.id === action.payload
          ? { ...book, status: BOOK_STATUS.Borrowed }
          : book
      });
      state.arr = temp;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook, borrowBook } = bookSlice.actions;

export default bookSlice.reducer;
