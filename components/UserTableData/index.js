import React from "react";
import s from "./UserTableData.module.css";

function UserTableData({ user }) {
  return (
    <div>
      <div className={s.table__data__row}>
        <div
          className={
            s["table__data--row__column"] + " " + s["table__data--row__id"]
          }
        >
          {user.id}
        </div>
        <div
          className={
            s["table__data--row__column"] + " " + s["table__data--row__name"]
          }
        >
          {user.name}
        </div>
        <div
          className={
            s["table__data--row__column"] + " " + s["table__data--row__email"]
          }
        >
          {user.email}
        </div>
        <div
          className={
            s["table__data--row__column"] + " " + s["table__data--row__role"]
          }
        >
          {user.role}
        </div>
        <div
          className={
            s["table__data--row__column"] + " " + s["table__data--row__action"]
          }
        >
          <a href="">Add</a> <a href="">Delete</a>
        </div>
      </div>
    </div>
  );
}

export default UserTableData;
