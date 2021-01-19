import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ children }) {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            The M Word <i className="fab fa-typo3" />
          </Link>
          {children}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
