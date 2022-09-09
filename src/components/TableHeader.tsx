import {
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import CreateIcon from "@material-ui/icons/Create";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import "./TableHeader.css";

function TableHeader(props: { numSelected: any; title: String }) {
  const { numSelected, title } = props;

  return (
    <Toolbar className={numSelected > 0 ? "highlight-bar" : "basic-bar"}>
      <div>
        {numSelected > 0 ? (
          <Typography className="selected-word">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" className="table-title">
            {title}
          </Typography>
        )}
      </div>
      <div className="space" />
      <div>
        {numSelected > 0 ? (
          <div>
            <Tooltip title="Delete" placement="right-start">
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton aria-label="Edit">
                <CreateIcon />
              </IconButton>
            </Tooltip>
          </div>
        ) : (
          <div>
            <Tooltip title="Filter list" placement="right-start">
              <IconButton>
                <FilterListIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add" placement="right-start">
              <IconButton>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </div>
    </Toolbar>
  );
}

export default TableHeader;
