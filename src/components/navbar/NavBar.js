import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            The M Word <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/competitive"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Competitive Programming
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/mobile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Mobile Development
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/webdev"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Web Development
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/machinelearning"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Machine Learning
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/miscellaneous"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Miscellaneous
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
