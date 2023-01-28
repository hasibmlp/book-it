import React from "react";
import UserTableData from "../UserTableData";
import UserTableHead from "../UserTableHead";

import s from "./UserTable.module.css";

function UserTable({ users }) {
  return (
    <div>
      <div className={s.table}>
        <UserTableHead />

        <div className={s.table__data}>
          {users.map((user) => {
            return <UserTableData user={user} />;
          })}
        </div>

        <UserTableHead />
      </div>
    </div>
  );
}

export default UserTable;
