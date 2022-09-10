import React from "react";
import "./UserPage.css";
import TableList from "../components/TableList";
import { useAppSelector } from "../constants/hooks";
import RowToolEditor from "../components/RowToolEditor";

const cellClassRules = {
  "borrowed-status": (params: { value: string }) => params.value === "Borrowed",
  "available-status": (params: { value: string }) =>
    params.value === "Available",
};

const columns = [
  { field: "title", headerName: "Title", minWidth: 200, editable: true },
  { field: "description", headerName: "Description", minWidth: 300, editable: true },
  { field: "genre", headerName: "Genre", minWidth: 150, editable: true },
  { field: "author", headerName: "Author", minWidth: 200, editable: true },
  { field: "year_published", headerName: "Year Published", minWidth: 150, editable: true },
  { field: "status", headerName: "Status", minWidth: 150, cellClassRules, editable: true },
  { field: "last_borrower", headerName: "Last Borrower", minWidth: 150, editable: true },
  {
    field: "actions",
    headerName: "Actions",
    renderCell: RowToolEditor,
    sortable: false,
    width: 120,
    headerAlign: "center",
    filterable: false,
    align: "center",
    disableColumnMenu: true,
    disableReorder: true,
  }
];

function BookPage() {
  const books = useAppSelector((state) => state.books.arr);

  return (
    <div className="page-container">
      <TableList data={books} title="Books" rows={columns} />
    </div>
  );
}

export default BookPage;
