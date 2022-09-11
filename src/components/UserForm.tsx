import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../constants/usersSlice";
import "./Navbar.css";

const UserForm = (props: { onCloseModal: any }) => {
  const { onCloseModal } = props;
  const dispatch = useDispatch()
  const [newUser, setNewUser] = useState({
    name: "",
    role: "",
  });

  const onSetName = (event: { target: { value: string; }; }) => {
    let user = {...newUser}
    user.name = event.target.value;
    setNewUser(user);
  };

  const onSetRole = (event: { target: { value: string; }; }) => {
    let user = {...newUser}
    user.role = event.target.value;
    setNewUser(user);
  };

  const addNewUser = () => {
    dispatch(addUser(newUser));
    onCloseModal();
  }

  return (
    <div className="modal-container">
      <form className="record-form">
        <div className="form-title">New Member</div>
        <input
          className="input-box"
          type="text"
          value={newUser.name}
          onChange={onSetName}
          placeholder="Name"
          required
        />
        <input
          className="input-box"
          type="text"
          value={newUser.role}
          onChange={onSetRole}
          placeholder="Role"
          required
        />
        <div className="action-container">
          <Button className="add-button" onClick={() => addNewUser()}>Add</Button>
          <Button className="add-button" onClick={() => onCloseModal()}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
