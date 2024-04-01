import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navigation() {
  return (
  <div className="navigation">
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/main">
        Front-End Developer
        </NavLink>
        <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/main">
                Home
                <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
                <a className="nav-link" href="./login">
                    Logout
                    </a>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
}

export default Navigation;