import React from 'react'
import {
    TableBody,
    TableCell,
    TableRow,
    Typography,
    Checkbox,
  } from "@material-ui/core";
import "./TableBody.css"

function BookTableBody(props: { data: any; page: number, rowsPerPage: number, selected: number[], onSelect: any, sortData: any, ascending: any}) {
    const { data, page, rowsPerPage, selected, onSelect, sortData, ascending } = props
    
  return (
    <TableBody>
    {sortData(data, (a: any, b: any) => ascending(a, b, "name"))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row: { id: number; name: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; genre: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; author: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; year_published: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; status: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; last_borrower: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
        const isRowSelected = selected.indexOf(row.id) > -1;
        return (
          <TableRow
            hover
            onClick={(event) => onSelect(event, row.id)}
          >
            <TableCell>
                  <Checkbox checked={isRowSelected} />
            </TableCell>
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
                <Typography className={row.status === "Borrowed" ? "borrowed-status" : "available-status"}>
                    {row.status}
                </Typography>
                </TableCell>
            <TableCell>{row.last_borrower}</TableCell>
          </TableRow>
        );
      })}
  </TableBody>
  )
}

export default BookTableBody