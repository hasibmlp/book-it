import React from "react";

function Login() {
  return (
    <div className="login">
      <h2 className="login__title">Login</h2>

      <form className="login__form">
        <fieldset>
          <label for="name">Full Name</label>
          <input type="text" id="name" />
        </fieldset>

        <fieldset>
          <label for="email">Email</label>
          <input type="email" id="email" />
        </fieldset>

        <fieldset>
          <a href="">Forget Password?</a>
        </fieldset>

        <div>
          <input type="submit" className="" value="LOGIN" />
          <a href="/register">New User?</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
