import React from "react";
import "./UserPage.css";
import TableList from "../components/TableList";
import RowToolEditor from "../components/RowToolEditor";
import { useAppSelector } from "../constants/hooks";

function UserPage() {
  const isAdmin = useAppSelector((state) => state.login.isAdmin);

  const UserLabels = [
    { field: "name", headerName: "Name", minWidth: 300, headerAlign: "center", editable: isAdmin },
    { field: "role", headerName: "Role", minWidth: 250, headerAlign: "center", editable: isAdmin },
    { field: "joinDate", type: 'date', headerName: "Date Joined", minWidth: 250, headerAlign: "center", align: "center", editable: isAdmin },
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
    },
  ];

  let columnLabels = [...UserLabels]
  if (!isAdmin) {
    columnLabels.splice(UserLabels.length - 1, 1)
  }

  return (
    <div className="page-container">
      <TableList title="Users" rows={columnLabels}/>
    </div>
  );
}

export default UserPage;
