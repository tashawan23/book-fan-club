import React from "react";
import { useAppSelector } from "../constants/hooks";
import "./TableBody.css";
import {
  GridRowParams,
  MuiEvent,
} from "@mui/x-data-grid-pro";
import { DataGrid } from "@mui/x-data-grid";

function UserTableBody(props: {
  rowsPerPage: number;
  columns: any;
  handleChangeRowsPerPage: any;
}) {
  const { rowsPerPage, columns, handleChangeRowsPerPage } = props;
  const users = useAppSelector(state => state.users.arr);


  const handleRowEditStart = (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>
  ) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (
    params: GridRowParams,
    event: any
  ) => {
    event.defaultMuiPrevented = true;
  };

  return (
    <div style={{ height: 700, width: "90%", alignSelf: "center" }}>
      <DataGrid
        rows={users}
        columns={columns}
        rowsPerPageOptions={[10, 20, 25]}
        pagination
        pageSize={rowsPerPage}
        onPageSizeChange={(newSize) => handleChangeRowsPerPage(newSize)}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
      />
    </div>
  );
}

export default UserTableBody;
