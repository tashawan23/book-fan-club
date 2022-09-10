import { Button } from "@mui/material";
import React from "react";
import "./Navbar.css";

const Form = (props: { fields: any }) => {
  const { fields } = props;

  return (
    <form className="record-form">
      {fields.map((column: { headerName: string | undefined }) => {
        return column.headerName !== "Actions" ? (
          <input
            className="input-box"
            type="text"
            //   value={}
            //   onChange={}
            placeholder={column.headerName}
            required
          />
        ) : (
          <div />
        );
      })}
      <div className="action-container">
        <Button className="add-button">Add</Button>
        <Button className="add-button">Cancel</Button>
      </div>
    </form>
  );
};

export default Form;
