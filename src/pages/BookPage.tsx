import React from "react";
import { Paper } from "@material-ui/core";
import "./UserPage.css";
import TableList from "../components/TableList";
import { useAppSelector } from "../constants/hooks";

const BookLabels = [
  { id: "title", label: "Title" },
  { id: "description", label: "Description" },
  { id: "genre", label: "Genre" },
  { id: "author", label: "Author" },
  { id: "year_published", label: "Year Published" },
  { id: "status", label: "Status" },
  { id: "last_borrower", label: "Last Borrower" },
];

function BookPage() {
  const books = useAppSelector(state => state.books.arr)

  return (
    <Paper className="page-container">
      <TableList data={books} title="Books" rows={BookLabels} />
    </Paper>
  );
}

export default BookPage;
