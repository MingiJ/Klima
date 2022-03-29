import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Activate from "./pages/Activate";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import './app.css'
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./HOCs/Layout";
import Home from "./pages/home/Home";
import Events from "./pages/events/Events";


const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route
            exact
            path="/password/reset/confirm/:uid/token"
            component={ResetPasswordConfirm}
          />
          <Route exact path="/activate/:uid/token" component={Activate} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
