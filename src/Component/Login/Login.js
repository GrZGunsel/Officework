import React from "react";
import "./login.scss";
const login = ({ Logo }) => {
  return (
    <div className="loginpannel">
      <img src={Logo} alt="" width=" 81.24px" height="71px" />
      <h1>Welcome Back!</h1>
      <div className="input">
        <label htmlFor="">Email or User Name</label>
        <input type="text" />
      </div>
      <div className="input">
        <label htmlFor="">Password</label>
        <input type="text" />
      </div>
      <div className="forgetPassword">
        <div className="checkbox">
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <p>Forget Password ?</p>
      </div>
      <button type="submit">Login</button>
      <p>
        Haven't Created account? <span>Sign Up</span>
      </p>
    </div>
  );
};

export default login;
