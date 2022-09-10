import React from "react";
import "./UserPage.css";
import TableList from "../components/TableList";
import { useAppSelector } from "../constants/hooks";

const columns = [
  { field: "title", headerName: "Title", minWidth: 250, headerClassName:'column-header' },
  { field: "description", headerName: "Description", minWidth: 300, headerClassName:'column-header' },
  { field: "genre", headerName: "Genre", minWidth: 200, headerClassName:'column-header' },
  { field: "author", headerName: "Author", minWidth: 200, headerClassName:'column-header' },
  { field: "year_published", headerName: "Year Published", minWidth: 200, headerClassName:'column-header' },
  { field: "status", headerName: "Status", minWidth: 200, headerClassName:'column-header' },
  { field: "last_borrower", headerName: "Last Borrower", minWidth: 200, headerClassName:'column-header' },
];

function BookPage() {
  const books = useAppSelector(state => state.books.arr)

  return (
    <div className="page-container">
      <TableList data={books} title="Books" rows={columns} />
    </div>
  );
}

export default BookPage;
