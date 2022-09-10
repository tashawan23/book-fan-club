import React, { SyntheticEvent } from "react";
import { useAppSelector } from "../constants/hooks";
import "./TableBody.css";
import {
  GridRowParams,
  useGridApiRef,
  MuiEvent,
  DataGridPro,
} from "@mui/x-data-grid-pro";
import AddToolbar from "./AddToolbar";
import { DataGrid } from "@mui/x-data-grid";

function UserTableBody(props: {
  data: any;
  rowsPerPage: number;
  columns: any;
  handleChangeRowsPerPage: any;
}) {
  const { data, rowsPerPage, columns, handleChangeRowsPerPage } = props;
  const isAdmin = useAppSelector((state) => state.login.isAdmin);
  const apiRef = useGridApiRef();

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
        rows={data}
        columns={columns}
        checkboxSelection={isAdmin}
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
