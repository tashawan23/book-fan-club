import React from "react";
import { useAppSelector } from "../constants/hooks";
import "./TableBody.css"
import { DataGrid } from "@mui/x-data-grid";

function UserTableBody(props: {
  data: any;
  rowsPerPage: number;
  columns: any;
  handleChangeRowsPerPage: any;
}) {
  const { data, rowsPerPage, columns, handleChangeRowsPerPage } = props;
  const isAdmin = useAppSelector((state) => state.login.isAdmin);

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
    />
  </div>
  );
}

export default UserTableBody;
