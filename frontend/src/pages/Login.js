import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { login } from "../actions//auth.js";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password); //from Auth Action
  };

  //checking whether the user is authenticated
  //if so, Redirect them to the homepage

  if (isAuthenticated) {
    return <Redirect to ='/' />
  }
    return (
      <div className="container mt-5">
        <h3 className="my-4 font-weight-bold-display-4">Sign In</h3>
        <p>Sign into your account </p>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label className="mt-1"> Email Address</label>
            <input
              className="form-control shadow-none"
              autoComplete="off"
              type="email"
              placeholder=" email "
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <label className="mt-3"> Password </label>
          <div className="form-group">
            <input
              className="form-control shadow-none"
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="8"
              required
            />
          </div>
          <button className="btn btn-warning mt-3" type="submit">
            Login
          </button>
        </form>
        <p className="mt-3">
          Don't have an acount? <Link to="/signup">Sign Up</Link>
        </p>
        <p className="mt-3">
          Forgot Password?{" "}
          <Link to="/reset-password">Reset your Password </Link>
        </p>
      </div>
    );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated

});

export default connect(mapStateToProps, { login })(Login);
