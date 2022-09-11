import React from "react";
import { createTheme, makeStyles } from "@material-ui/core";
import "./TableBody.css";
import { useAppSelector } from "../constants/hooks";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";

const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme) => ({
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

function BookTableBody(props: {
  rowsPerPage: number;
  columns: any;
  handleChangeRowsPerPage: any;
}) {
  const { rowsPerPage, columns, handleChangeRowsPerPage } = props;
  const books = useAppSelector((state) => state.books.arr);
  const classes = useStyles();

  return (
    <div style={{ height: 700, width: "90%", alignSelf: "center" }}>
      <DataGrid
        disableSelectionOnClick
        className={classes.root}
        rows={books}
        columns={columns}
        rowsPerPageOptions={[10, 20, 25]}
        pagination
        pageSize={rowsPerPage}
        onPageSizeChange={(newSize) => handleChangeRowsPerPage(newSize)}
        getCellClassName={(params: GridCellParams<number>) => {
          if (params.field === 'status') {
            return params.row.status === "Available" ? 'available-status' : 'borrowed-status'
          }
          if (params.row.status === "Borrowed") {
            return 'borrowed-row'
          }
          return ''
        }}
      />
    </div>
  );
}

export default BookTableBody;
