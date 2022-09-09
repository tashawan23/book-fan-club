import React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Avatar,
  Grid,
  Typography,
  Checkbox,
} from "@material-ui/core";
import { useAppSelector } from "../constants/hooks";
import "./TableBody.css"

function UserTableBody(props: {
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

  return (
    <TableBody>
      {sortData(data, getSorting(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(
          (row: {
            id: number;
            name: string;
            role: string;
            joinDate: string;
          }) => {
            const isRowSelected = selected.indexOf(row.id) > -1;
            return (
              <TableRow
                hover={isAdmin}
                onClick={(event) => isAdmin ? onSelect(event, row.id) : undefined}
              >
                <TableCell>
                  <Grid container>
                    {isAdmin && (
                      <Grid item lg={6}>
                        <Checkbox checked={isRowSelected} />
                      </Grid>
                    )}
                    <Grid item lg={2}>
                      <Avatar className="avatar" />
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Typography className="name">{row.name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">
                    {row.role}
                  </Typography>
                </TableCell>
                <TableCell>{row.joinDate}</TableCell>
              </TableRow>
            );
          }
        )}
    </TableBody>
  );
}

export default UserTableBody;
