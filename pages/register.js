import React from "react";

function Register() {
  return (
    <div className="register">
      <h2 className="register__title">Join Us</h2>
      <form className="register__form">
        <fieldset>
          <label for="name">Full Name</label>
          <input type="text" id="name" />
        </fieldset>
        <fieldset>
          <label for="email">Email</label>
          <input type="email" id="email" />
        </fieldset>
        <fieldset>
          <label for="password">Password</label>
          <input type="password" id="password" />
        </fieldset>
        <fieldset>
          <label for="avatar">Avatar</label>

          <div className="register__form--avatar">
            <figure>
              <img src="/img/avatar1.png" />
            </figure>
            <div>
              <input type="text" placeholder="Choose Avatar" />
              <a href="">Browse</a>
            </div>
          </div>
        </fieldset>

        <input type="submit" className="" value="REGISTER" />
      </form>
    </div>
  );
}

export default Register;
