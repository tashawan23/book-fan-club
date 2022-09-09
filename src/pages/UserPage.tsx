import React from "react";
import {
  Paper,
} from "@material-ui/core";
import "./UserPage.css";
import TableList from "../components/TableList";
import { USERS } from "../data/users";

const UserLabels = ["Name", "Role", "Date Joined"];

function UserPage() {

  return (
    <Paper className="page-container">
      <TableList data={USERS} title="Users" labels={UserLabels}/>
    </Paper>
  );
}

export default UserPage;
