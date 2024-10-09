import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/wRIGHTISTs_transparent.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="logo" style={{ height: '50px' }} />
        </Link>

        {/* Toggler Button (for smaller screens) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">Profile</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login/Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
