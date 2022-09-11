import React from "react";
import { useAppSelector } from "../constants/hooks";
import "./TableBody.css";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme, makeStyles } from "@material-ui/core";

const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme: { palette: { type: string; }; }) => ({
    root: {
      border: 0,
      WebkitFontSmoothing: "auto",
      letterSpacing: "normal",
      "& .MuiDataGrid-iconSeparator": {
        display: "none",
      },
      "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
        borderRight: `1px solid ${
          theme.palette.type === "light" ? "#f0f0f0" : "#303030"
        }`,
      },
    },
  }),
  { defaultTheme }
);

function UserTableBody(props: {
  rowsPerPage: number;
  columns: any;
  handleChangeRowsPerPage: any;
}) {
  const { rowsPerPage, columns, handleChangeRowsPerPage } = props;
  const users = useAppSelector((state) => state.users.arr);
  const classes = useStyles();

  return (
    <div style={{ height: 700, width: "90%", alignSelf: "center" }}>
      <DataGrid
        className={classes.root}
        rows={users}
        columns={columns}
        rowsPerPageOptions={[10, 20, 25]}
        pagination
        pageSize={rowsPerPage}
        onPageSizeChange={(newSize) => handleChangeRowsPerPage(newSize)}
      />
    </div>
  );
}

export default UserTableBody;
