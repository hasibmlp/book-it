import React from "react";
import UserTable from "../../components/UserTable";
import UserTableData from "../../components/UserTableData";
import UserTableHead from "../../components/UserTableHead";

const Users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    role: "admin",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    role: "user",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    role: "user",
  },
  {
    id: 4,
    name: "Shammas",
    username: "shamm",
    email: "Shammas@gmail.com",
    role: "user",
  },
];

function AdminUsers() {
  return (
    <div className="page_wrapper">
      <section className="users_page">
        <h2 className="users_page__title">
          <span>{Users.length}</span> Users
        </h2>

        <div className="users_page__content">
          <form className="users_page__form">
            <fieldset>
              <label for="number">Show entries</label>
              <input
                type="number"
                id="number"
                max="10"
                min="1"
                placeholder="1"
              />
            </fieldset>

            <fieldset>
              <input type="seacrh" placeholder="Search" />
            </fieldset>
          </form>

          <UserTable users={Users} />
        </div>

        <div className="show_page_no">
          <p>
            Showing <span>1</span> to <span>2</span> of <span>2</span> entries
          </p>
          <div className="show_page_no__box">
            <a href="" className="show_page_no__box--prev">
              previous
            </a>
            <span href="" className="show_page_no__box--no">
              1
            </span>
            <a href="" className="show_page_no__box--next">
              next
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminUsers;
