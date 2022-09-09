import React, { useState } from 'react'
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Avatar,
    Grid,
    Typography,
    TableFooter,
    TablePagination,
    Checkbox,
    Paper
 } from '@material-ui/core'
import { USERS } from '../data/users';
import TableHeader from '../components/TableHeader';
import './UserPage.css'

function UserPage() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [userData, setUserData] = useState(USERS);
    const [selected, setSelected] = useState<number[]>([])

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
        setPage(newPage);
        console.log(newPage)
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const onSelect = (event: any | null, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected : number[] = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
        setSelected(newSelected);
      };

    const ascending = (a: { [x: string]: number; }, b: { [x: string]: number; }, orderBy: string | number) => {
        if (b[orderBy] < a[orderBy]) {
          return 1;
        }
        if (b[orderBy] > a[orderBy]) {
          return -1;
        }
        return 0;
    }
    
    const sortData = (array: any[], cmp: (arg0: any, arg1: any) => any) => {
        const temp = array.map((item: any, index: any) => [item, index]);
        temp.sort((a: number[], b: number[]) => {
          const order = cmp(a[0], b[0]);
          if (order !== 0) return order;
          return a[1] - b[1];
        });
        return temp.map((el: any[]) => el[0]);
     }

    return (
        <Paper className="page-container">
            <div className="content-area">
            <TableHeader numSelected={selected.length} />
        <TableContainer className="table-container">
            <Table className="table">
            <TableHead>
            <TableRow>
                <TableCell className="table-header">User Name</TableCell>
                <TableCell className="table-header">Role</TableCell>
                <TableCell className="table-header">Date Joined</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {sortData(userData, (a, b) => ascending(a, b, 'name'))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
                const isRowSelected = selected.indexOf(row.id) > -1;
                return (
                <TableRow 
                key={row.name}
                hover
                onClick={event => onSelect(event, row.id)}>
                <TableCell>
                    <Grid container>
                        <Grid item lg={2}>
                            <Checkbox checked={isRowSelected} />
                        </Grid>
                        <Grid item lg={2}>
                            <Avatar alt={row.name} src='.' className="avatar-badge"/>
                        </Grid>
                        <Grid item lg={6}>
                            <Typography className="name">{row.name}</Typography>
                        </Grid>
                    </Grid>
                    </TableCell>
                <TableCell>
                    <Typography color="primary" variant="subtitle2">{row.role}</Typography>
                    </TableCell>
                <TableCell>{row.joinDate}</TableCell>
                </TableRow>
                )}
            )}
            </TableBody>
            <TableFooter>
            <TablePagination
            count={userData.length}
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
        </Paper>
    );
  }
  
  export default UserPage;