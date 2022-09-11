import React, { useState } from "react";
import "../pages/UserPage.css";
import UserTableBody from "./UserTableBody";
import BookTableBody from "./BookTableBody";
import AddToolbar from "./AddToolbar";
import UserForm from "./UserForm";
import BookForm from "./BookForm";
import { useAppSelector } from "../constants/hooks";

function TableList(props: { title: String; rows: any[] }) {
  const { title, rows } = props;
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showAdd, setShowAdd] = useState(false);
  const isAdmin = useAppSelector((state) => state.login.isAdmin);
  const isEditor = useAppSelector((state) => state.login.isEditor);

  const handleChangeRowsPerPage = (newSize: number) => {
    setRowsPerPage(newSize);
  };

  const onClickAdd = () => {
    setShowAdd(true);
  };

  const onCloseModal = () => {
    setShowAdd(false);
  };

  return (
    <div className="content-area">
      {showAdd &&
        (title === "Users" ? (
          <UserForm onCloseModal={() => onCloseModal()} />
        ) : (
          <BookForm onCloseModal={() => onCloseModal()} />
        ))}
      {(isAdmin || (isEditor && title === "Books")) && (<AddToolbar onClick={() => onClickAdd()} />)}
      {title === "Users" ? (
        <UserTableBody
          rowsPerPage={rowsPerPage}
          columns={rows}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      ) : (
        <BookTableBody
          rowsPerPage={rowsPerPage}
          columns={rows}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </div>
  );
}

export default TableList;
