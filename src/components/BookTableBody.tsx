import React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Checkbox,
} from "@material-ui/core";
import "./TableBody.css";
import { useAppSelector } from "../constants/hooks";

function BookTableBody(props: {
  data: any;
  page: number;
  rowsPerPage: number;
  selected: number[];
  onSelect: any;
  sortData: any;
  getSorting: any;
  order: any;
  orderBy: any;
}) {
  const {
    data,
    page,
    rowsPerPage,
    selected,
    onSelect,
    sortData,
    getSorting,
    order,
    orderBy,
  } = props;
  const isAdmin = useAppSelector((state) => state.login.isAdmin);
  const isEditor = useAppSelector((state) => state.login.isEditor);

  return (
    <TableBody>
      {sortData(data, getSorting(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(
          (row: {
            id: number;
            name: string;
            title: string;
            description: string;
            genre: string;
            author: string;
            year_published: string;
            status: string;
            last_borrower: string;
          }) => {
            const isRowSelected = selected.indexOf(row.id) > -1;
            return (
              <TableRow
                hover={isAdmin || isEditor}
                onClick={(event) =>
                  isAdmin ? onSelect(event, row.id) : undefined
                }
              >
                {isAdmin || isEditor ? (
                  <TableCell>
                    <Checkbox checked={isRowSelected} />
                  </TableCell>
                ) : (
                  <TableCell />
                )}
                <TableCell>
                  <Typography className="name">{row.title}</Typography>
                </TableCell>
                <TableCell width="20%">
                  <Typography color="primary" variant="subtitle2">
                    {row.description}
                  </Typography>
                </TableCell>
                <TableCell>{row.genre}</TableCell>
                <TableCell>{row.author}</TableCell>
                <TableCell>{row.year_published}</TableCell>
                <TableCell>
                  <Typography
                    className={
                      row.status === "Borrowed"
                        ? "borrowed-status"
                        : "available-status"
                    }
                  >
                    {row.status}
                  </Typography>
                </TableCell>
                <TableCell>{row.last_borrower}</TableCell>
              </TableRow>
            );
          }
        )}
    </TableBody>
  );
}

export default BookTableBody;
