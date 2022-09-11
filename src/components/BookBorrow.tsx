import { GridRowId } from "@mui/x-data-grid-pro";
import React from "react";
import { useDispatch } from "react-redux";
import { borrowBook } from "../constants/booksSlice";
import { useAppSelector } from "../constants/hooks";
import "./Navbar.css";

const BookBorrow = (props: RowMenuProps) => {
  const { id } = props;
  const dispatch = useDispatch();
  const books = useAppSelector((state) => state.books.arr);

  const isBorrowed = books.find((book) => {
    return book.id === id
  })?.status === "Borrowed"

  const onBorrow = () => {
    dispatch(borrowBook(id));
  };

  return (
    <div className={isBorrowed ? "borrowed-cell" :"borrow-button"} onClick={() => onBorrow()}>
      BORROW
    </div>
  );
};

interface RowMenuProps {
  id: GridRowId;
}

export default BookBorrow;
