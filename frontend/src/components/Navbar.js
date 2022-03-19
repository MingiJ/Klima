import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

const Navbar = ({ logout, isAuthenticated }) => {
  const guestLinks = () => (
    <Fragment>
      <li class="nav-item">
        <Link class="nav-link" to="/login">
          Sign in
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/signup">
          Sign Up
        </Link>
      </li>
    </Fragment>
  );

  const authLinks = () => (
    <li class="nav-item">
      <a class="nav-link" href="#!" onClick={logout}>
        Logout
      </a>
    </li>
  );

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          Klimup
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home <span class="sr-only"></span>
              </Link>
            </li>
            {isAuthenticated ? authLinks() : guestLinks()}
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                Sign in
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></Link>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link class="dropdown-item" to="/EventsPage">
                  Events
                </Link>
                <Link class="dropdown-item" to="/PollingPage">
                  Polls
                </Link>
                <Link class="dropdown-item" to="/EducativePage">
                  Learn
                </Link>
                <Link class="dropdown-item" to="/ClimatePage">
                  Climate/Weather
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
