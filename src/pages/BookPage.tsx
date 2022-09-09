import React from 'react'
import { Paper } from '@material-ui/core'
import { BOOKS } from '../data/users';
import './UserPage.css'
import TableList from '../components/TableList';

const BookLabels = ["Title", "Description", "Genre", "Author", "Year Published", "Status", "Last Borrower"];

function BookPage() {

    return (
        <Paper className="page-container">
            <TableList data={BOOKS} title="Books" labels={BookLabels}/>
        </Paper>
    );
  }
  
  export default BookPage;