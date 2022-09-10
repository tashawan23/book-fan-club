import { Button } from "@mui/material";
import AddIcon from '@material-ui/icons/Add';
import { GridApiRef, GridToolbarContainer } from "@mui/x-data-grid-pro";
import "./Navbar.css"

function AddToolbar() {

  const handleClick = () => {
    console.log('here')
  };

  return (
    <div className="toolbar-container">
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add new record
      </Button>
    </div>
  );
}

export default AddToolbar;
