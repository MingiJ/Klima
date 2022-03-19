import React from "react";
import { Link } from "react-router-dom";
const Home = () => (
  <div className="container">
    <div class="jumbotron mt-5">
      <h1 class="display-4">Welcome to Klimup 😊</h1>
      <p class="lead">
        This is a platform that allows people to save the planet and have fun
        while at it.
      </p>
      <hr class="my-4" />
      <p>Click the login button below to get started.</p>
      <p class="lead">
        <Link class="btn btn-primary btn-lg" to="/login" role="button">
          Login
        </Link>
      </p>
    </div>
  </div>
);

export default Home;
