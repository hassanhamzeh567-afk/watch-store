
import React from "react";

const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault();

    alert("Login form submitted successfully!");
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <h1>Welcome Back</h1>

        <p>Login to your TimeZone account</p>

        <form onSubmit={handleLogin}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit" className="login-submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;
