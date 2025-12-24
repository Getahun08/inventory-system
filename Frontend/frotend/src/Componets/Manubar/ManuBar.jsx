import React from "react";
import { assets } from "../../assets/logo/logo";
import { Link } from "react-router-dom";
export default function ManuBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <div className="d-flex align-items-center">
           <img src={assets.logo} alt="Logo" width="100" height="100" />
          </div>
  
        </a>

        {/* Hamburger toggle for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu items */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">

<ul className="navbar-nav me-auto mb-2 mb-lg-0">
  <li className="nav-item">
    <Link className="nav-link" to="/dashboard">Dashboard</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/explore">Explore</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/manageuser">Manage Users</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/manageitems">Manage Items</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/managecategory">Manage Category</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/history">Order History</Link>
  </li>
</ul>


          {/* User account dropdown */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User Account
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
