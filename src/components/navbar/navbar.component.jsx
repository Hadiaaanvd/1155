import React from "react";
import logo from "../../assets/logo.png";

import { useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./navbar.styles.scss";
const Navbarr = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-component">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand onClick={() => navigate("/")}>
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Navbar>
    </div>
  );
};

export default Navbarr;
