import React from "react";
import { Paper } from "@material-ui/core";
import "./UserPage.css";
import TableList from "../components/TableList";
import { USERS } from "../data/users";

const UserLabels = [
  { id: "name", label: "Name" },
  { id: "role", label: "Role" },
  { id: "date_joined", label: "Date Joined" },
];

function UserPage() {
  return (
    <Paper className="page-container">
      <TableList data={USERS} title="Users" rows={UserLabels} />
    </Paper>
  );
}

export default UserPage;
