import React from "react";
import { Paper } from "@material-ui/core";
import "./UserPage.css";
import TableList from "../components/TableList";
import { useAppSelector } from "../constants/hooks";

const UserLabels = [
  { id: "name", label: "Name" },
  { id: "role", label: "Role" },
  { id: "date_joined", label: "Date Joined" },
];

function UserPage() {
  const users = useAppSelector(state => state.users.arr)

  return (
    <Paper className="page-container">
      <TableList data={users} title="Users" rows={UserLabels} />
    </Paper>
  );
}

export default UserPage;
