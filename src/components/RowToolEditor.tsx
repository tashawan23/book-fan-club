import { GridApi, GridRowId } from "@mui/x-data-grid";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Close";
import { createTheme, Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { useState } from "react";


const defaultTheme = createTheme();

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: theme.spacing(1),
      color: theme.palette.text.secondary,
    },
    textPrimary: {
      color: theme.palette.text.primary,
    },
  }),
  { defaultTheme },
);

function RowToolEditor(props: RowMenuProps) {
  const { api, id } = props;
  const classes = useStyles();
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation();
    api.setRowMode(id, "edit");
    setIsEditMode(true);
  };

  const handleSaveClick = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation();
    api.setRowMode(id, "view");
    setIsEditMode(false);
    const row = api.getRow(id);
    api.updateRows([{ ...row, isNew: false }]);
  };

  const handleDeleteClick = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation();
    api.updateRows([{ id, _action: "delete" }]);
  };

  const handleCancelClick = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation();
    api.setRowMode(id, "view");
    setIsEditMode(false);

    const row = api.getRow(id);
    if (row!.isNew) {
      api.updateRows([{ id, _action: "delete" }]);
    }
  };

  if (isEditMode) {
    return (
      <div className={classes.root}>
        <IconButton
          color="primary"
          size="small"
          aria-label="save"
          onClick={handleSaveClick}
        >
          <SaveIcon fontSize="small" />
        </IconButton>
        <IconButton
          color="inherit"
          size="small"
          aria-label="cancel"
          className={classes.textPrimary}
          onClick={handleCancelClick}
        >
          <CancelIcon fontSize="small" />
        </IconButton>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        className={classes.textPrimary}
        size="small"
        aria-label="edit"
        onClick={handleEditClick}
      >
        <EditIcon fontSize="small" />
      </IconButton>
      <IconButton
        color="inherit"
        size="small"
        aria-label="delete"
        onClick={handleDeleteClick}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
}

interface RowMenuProps {
  api: GridApi;
  id: GridRowId;
}

export default RowToolEditor;
