import React, { useState } from "react";
import "../pages/UserPage.css";
import UserTableBody from "./UserTableBody";
import BookTableBody from "./BookTableBody";
import AddToolbar from "./AddToolbar";
import Form from "./Form";

function TableList(props: { data: any; title: String; rows: any[] }) {
  const { data, title, rows } = props;
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [listData, setListData] = useState(data);

  const handleChangeRowsPerPage = (newSize: number) => {
    setRowsPerPage(newSize);
  };

  return (
    <div className="content-area">
      <AddToolbar />
      <Form fields={rows} />
      {title === "Users" ? (
        <UserTableBody
          rowsPerPage={rowsPerPage}
          data={listData}
          columns={rows}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      ) : (
        <BookTableBody
          rowsPerPage={rowsPerPage}
          data={listData}
          columns={rows}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </div>
  );
}

export default TableList;
