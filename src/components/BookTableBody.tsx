import React from "react";
import { createTheme, makeStyles } from "@material-ui/core";
import "./TableBody.css";
import { useAppSelector } from "../constants/hooks";
import { DataGrid } from "@mui/x-data-grid";

const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme) => ({
    root: {
      border: 0,
      color:
        theme.palette.type === "light"
          ? "rgba(0,0,0,.85)"
          : "rgba(255,255,255,0.85)",
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      WebkitFontSmoothing: "auto",
      letterSpacing: "normal",
      "& .MuiDataGrid-columnsContainer": {
        backgroundColor: "#e3b1f2",
      },
      "& .MuiDataGrid-iconSeparator": {
        display: "none",
      },
      "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
        borderRight: `1px solid ${
          theme.palette.type === "light" ? "#f0f0f0" : "#303030"
        }`,
      },
      "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
        borderBottom: `1px solid ${
          theme.palette.type === "light" ? "#f0f0f0" : "#303030"
        }`,
      },
      "& .MuiDataGrid-cell": {
        color:
          theme.palette.type === "light"
            ? "rgba(0,0,0,.85)"
            : "rgba(255,255,255,0.65)",
      },
      "& .MuiPaginationItem-root": {
        borderRadius: 0,
      },
    },
  }),
  { defaultTheme }
);

function BookTableBody(props: {
  data: any;
  rowsPerPage: number;
  columns: any;
  handleChangeRowsPerPage: any;
}) {
  const { data, rowsPerPage, columns, handleChangeRowsPerPage } = props;
  const isAdmin = useAppSelector((state) => state.login.isAdmin);
  const isEditor = useAppSelector((state) => state.login.isEditor);
  const classes = useStyles();

  return (
    <div style={{ height: 700, width: "90%", alignSelf: "center" }}>
      <DataGrid
        className={classes.root}
        rows={data}
        columns={columns}
        checkboxSelection={isAdmin || isEditor}
        rowsPerPageOptions={[10, 20, 25]}
        pagination
        pageSize={rowsPerPage}
        onPageSizeChange={(newSize) => handleChangeRowsPerPage(newSize)}
      />
    </div>
  );
}

export default BookTableBody;
