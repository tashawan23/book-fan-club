import React from 'react'
import {
    TableBody,
    TableCell,
    TableRow,
    Avatar,
    Grid,
    Typography,
    Checkbox,
  } from "@material-ui/core";

function UserTableBody(props: { data: any; page: number, rowsPerPage: number, selected: number[], onSelect: any, sortData: any, getSorting: any, order: any, orderBy: any}) {
    const { data, page, rowsPerPage, selected, onSelect, sortData, getSorting, order, orderBy } = props
    
  return (
    <TableBody>
    {sortData(data, getSorting(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row: { id: number; name: boolean | React.Key | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; role: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; joinDate: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
        const isRowSelected = selected.indexOf(row.id) > -1;
        return (
          <TableRow
            hover
            onClick={(event) => onSelect(event, row.id)}
          >
            <TableCell>
              <Grid container>
                <Grid item lg={6}>
                  <Checkbox checked={isRowSelected} />
                </Grid>
                <Grid item lg={2}>
                  <Avatar
                    src="."
                    className="avatar-badge"
                  />
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
      })}
  </TableBody>
  )
}

export default UserTableBody