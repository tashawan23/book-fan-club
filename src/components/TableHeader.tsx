import { IconButton, TableCell, TableRow, Toolbar, Tooltip, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import React from 'react'
import "./TableHeader.css";

function TableHeader(props: { numSelected: any; })  {
    const { numSelected } = props;

  return (
    <Toolbar className={ numSelected > 0 ? 'highlight-bar' : 'basic-bar'}>
      <div>
        {numSelected > 0 ? (
          <Typography className='selected-word'>
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6">
            Users
          </Typography>
        )}
      </div>
      <div className='space'/>
      <div>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton className='filter-button'>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
}

export default TableHeader