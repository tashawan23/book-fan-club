import React from "react";
import "./UserPage.css";
import TableList from "../components/TableList";
import RowToolEditor from "../components/RowToolEditor";
import { useAppSelector } from "../constants/hooks";

const cellClassRules = {
  "borrowed-status": (params: { value: string }) => params.value === "Borrowed",
  "available-status": (params: { value: string }) =>
    params.value === "Available",
};

function BookPage() {
  const isAdmin = useAppSelector((state) => state.login.isAdmin);
  const isEditor = useAppSelector((state) => state.login.isEditor);

  const columns = [
    { field: "title", headerName: "Title", minWidth: 200, editable: isEditor||isAdmin },
    { field: "description", headerName: "Description", minWidth: 300, editable: isEditor||isAdmin },
    { field: "genre", headerName: "Genre", minWidth: 150, editable: isEditor||isAdmin },
    { field: "author", headerName: "Author", minWidth: 200, editable: isEditor||isAdmin },
    { field: "year_published", headerName: "Year Published", minWidth: 150, editable: isEditor||isAdmin },
    { field: "status", headerName: "Status", minWidth: 150, cellClassRules, editable: isEditor||isAdmin },
    { field: "last_borrower", headerName: "Last Borrower", minWidth: 150, editable: isEditor||isAdmin },
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

  let columnLabels = [...columns]
  if (!isAdmin && !isEditor) {
    columnLabels.splice(columns.length - 1, 1)
  }

  return (
    <div className="page-container">
      <TableList title="Books" rows={columnLabels} />
    </div>
  );
}

export default BookPage;
