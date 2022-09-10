import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useAppSelector } from "../constants/hooks";
import "./UserPage.css";

const columns = [
  { field: "title", headerName: "Title", minWidth: 250 },
  { field: "description", headerName: "Description", minWidth: 300 },
  { field: "genre", headerName: "Genre", minWidth: 200 },
  { field: "author", headerName: "Author", minWidth: 200 },
  { field: "year_published", headerName: "Year Published", minWidth: 200 },
  { field: "status", headerName: "Status", minWidth: 200 },
  { field: "last_borrower", headerName: "Last Borrower", minWidth: 200 },
];

const TestTable = () => {
  const books = useAppSelector((state) => state.books.arr);

  return (
    <div style={{ height: 900, width: '90%' }}>
      <DataGrid 
      rows={books} columns={columns} checkboxSelection={true} />
    </div>
  );
};

export default TestTable;
