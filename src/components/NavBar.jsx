import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isActive, setisActive] = React.useState(false);

  return (
    <nav className="navbar has-background-info-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <h1>Journal</h1>
        </Link>

        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/category" className="navbar-item">Create New Entry</Link>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
