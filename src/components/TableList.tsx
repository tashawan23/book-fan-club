import React, { useState } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  Tooltip,
  TableSortLabel,
} from "@material-ui/core";
import TableHeader from "../components/TableHeader";
import "../pages/UserPage.css";
import UserTableBody from "./UserTableBody";
import BookTableBody from "./BookTableBody";

function TableList(props: { data: any; title: String; rows: any[] }) {
  const { data, title, rows } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [listData, setListData] = useState(data);
  const [selected, setSelected] = useState<number[]>([]);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState("name");

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleSort = (event: any, property: React.SetStateAction<string>) => {
    const orderBy = property;
    let newOrder: "asc" | "desc" = "desc";

    if (orderBy === property && order === "desc") {
      newOrder = "asc";
    }
    setOrder(newOrder);
    setOrderBy(property);
  };

  const sortBy = (property: any) => (event: any) => {
    handleSort(event, property);
  };

  const onSelect = (event: any | null, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const ascending = (
    a: { [x: string]: number },
    b: { [x: string]: number },
    orderBy: string | number
  ) => {
    if (b[orderBy] < a[orderBy]) {
      return 1;
    }
    if (b[orderBy] > a[orderBy]) {
      return -1;
    }
    return 0;
  };

  const sortData = (array: any[], cmp: (arg0: any, arg1: any) => any) => {
    const temp = array.map((item: any, index: any) => [item, index]);
    temp.sort((a: number[], b: number[]) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return temp.map((el: any[]) => el[0]);
  };

  const getSorting = (order: string, orderBy: any) => {
    return order === 'desc' ? (a: any, b: any) => -ascending(a, b, orderBy) : (a: any, b: any) => ascending(a, b, orderBy);
  }
  console.log(order)

  return (
    <div className="content-area">
      <TableHeader numSelected={selected.length} title={title} />
      <TableContainer className="table-container">
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell />
              {rows.map((item) => (
                <TableCell className="table-header">
                  <Tooltip title="Sort" enterDelay={300}>
                    <TableSortLabel
                      active={orderBy === item.id}
                      direction={order}
                      onClick={sortBy(item.id)}
                    >
                      {item.label}
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {title === "Users" ? (
            <UserTableBody
              page={page}
              rowsPerPage={rowsPerPage}
              data={listData}
              onSelect={onSelect}
              selected={selected}
              sortData={sortData}
              getSorting={getSorting}
              order={order}
              orderBy={orderBy}
            />
          ) : (
            <BookTableBody
              page={page}
              rowsPerPage={rowsPerPage}
              data={listData}
              onSelect={onSelect}
              selected={selected}
              sortData={sortData}
              getSorting={getSorting}
              order={order}
              orderBy={orderBy}
            />
          )}
          <TableFooter>
            <TablePagination
              count={listData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 25]}
            />
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableList;
