import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../constants/booksSlice";
import "./Navbar.css";

const BookForm = (props: { onCloseModal: any }) => {
  const { onCloseModal } = props;
  const dispatch = useDispatch()
  const [newBook, setNewBook] = useState({
    title: "",
    description: "",
    genre: "",
    author: "",
    year_published: "",
  });

  const onSetTitle = (event: { target: { value: string; }; }) => {
    let book = {...newBook}
    book.title = event.target.value;
    setNewBook(book);
  };

  const onSetDescription = (event: { target: { value: string; }; }) => {
    let book = {...newBook}
    book.description = event.target.value;
    setNewBook(book);
  };

  const onSetGenre = (event: { target: { value: string; }; }) => {
    let book = {...newBook}
    book.genre = event.target.value;
    setNewBook(book);
  };

  const onSetAuthor = (event: { target: { value: string; }; }) => {
    let book = {...newBook}
    book.author = event.target.value;
    setNewBook(book);
  };

  const onSetYear = (event: { target: { value: string; }; }) => {
    let book = {...newBook}
    book.year_published = event.target.value;
    setNewBook(book);
  };

  const addNewBook = () => {
    dispatch(addBook(newBook));
    onCloseModal();
  }

  return (
    <div className="modal-container">
      <form className="record-form">
        <div className="form-title">New Book</div>
        <input
          className="input-box"
          type="text"
          value={newBook.title}
          onChange={onSetTitle}
          placeholder="Title"
          required
        />
        <input
          className="input-box"
          type="text"
          value={newBook.description}
          onChange={onSetDescription}
          placeholder="Description"
          required
        />
        <input
          className="input-box"
          type="text"
          value={newBook.genre}
          onChange={onSetGenre}
          placeholder="Genre"
          required
        />
        <input
          className="input-box"
          type="text"
          value={newBook.author}
          onChange={onSetAuthor}
          placeholder="Author"
          required
        />
         <input
          className="input-box"
          type="text"
          value={newBook.year_published}
          onChange={onSetYear}
          placeholder="Year Published"
          required
        />
        <div className="action-container">
          <Button className="add-button" onClick={() => addNewBook()}>Add</Button>
          <Button className="add-button" onClick={() => onCloseModal()}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
