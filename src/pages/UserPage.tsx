import React from "react";
import "./UserPage.css";
import TableList from "../components/TableList";
import { useAppSelector } from "../constants/hooks";
import RowToolEditor from "../components/RowToolEditor";

const UserLabels = [
  { field: "name", headerName: "Name", minWidth: 300, headerAlign: "center", editable: true },
  { field: "role", headerName: "Role", minWidth: 250, headerAlign: "center", editable: true },
  { field: "joinDate", type: 'date', headerName: "Date Joined", minWidth: 250, headerAlign: "center", align: "center", editable: true },
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

function UserPage() {
  const users = useAppSelector(state => state.users.arr)

  return (
    <div className="page-container">
      <TableList data={users} title="Users" rows={UserLabels} />
    </div>
  );
}

export default UserPage;
