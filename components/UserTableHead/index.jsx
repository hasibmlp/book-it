import React from "react";

import s from "./UserTableHead.module.css";

function UserTableHead() {
  return (
    <div>
      <div className={s.table__head}>
        <div
          className={
            s["table__head--column"] + " " + s["table__head--column__id"]
          }
        >
          <p>Users</p>
        </div>
        <div
          className={
            s["table__head--column"] + " " + s["table__head--column__name"]
          }
        >
          <p>Name</p>
        </div>
        <div
          className={
            s["table__head--column"] + " " + s["table__head--column__email"]
          }
        >
          <p>Email</p>
        </div>
        <div
          className={
            s["table__head--column"] + " " + s["table__head--column__role"]
          }
        >
          <p>Role</p>
        </div>
        <div
          className={
            s["table__head--column"] + " " + s["table__head--column__action"]
          }
        >
          <p>Role</p>
        </div>
      </div>
    </div>
  );
}

export default UserTableHead;
