import { Button } from "@mui/material";
import AddIcon from "@material-ui/icons/Add";
import "./Navbar.css";

function AddToolbar(props: { onClick: any }) {
  const { onClick } = props;

  return (
    <div className="toolbar-container">
      <Button color="primary" startIcon={<AddIcon />} onClick={onClick}>
        Add new record
      </Button>
    </div>
  );
}

export default AddToolbar;
