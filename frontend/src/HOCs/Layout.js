import React from "react";
import Navbar from "../components/Navbar.js";

const Layout = (props) => (
  <div>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;
