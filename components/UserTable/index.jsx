import React from "react";
import UserTableData from "../UserTableData";
import UserTableHead from "../UserTableHead";

function UserTable({ users }) {
  return (
    <div>
      <div className="table">
        <UserTableHead />

        <div className="table__data">
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
