import React from "react";
import "./UserPage.css";
import TableList from "../components/TableList";
import { useAppSelector } from "../constants/hooks";

const UserLabels = [
  { field: "name", headerName: "Name", minWidth: 300, headerClassName:'column-header' },
  { field: "role", headerName: "Role", minWidth: 250, headerClassName:'column-header' },
  { field: "joinDate", headerName: "Date Joined", minWidth: 250, headerClassName:'column-header' },
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
