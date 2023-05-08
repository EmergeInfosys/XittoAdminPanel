import React from 'react';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src="/WhiteLogo.png" alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Dashboard</Link>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Users
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/user">All User</Link></li>
            <div className="dropdown-divider"></div>
            <li><Link className="dropdown-item" to="/vendors">Vendors</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/view-brand">Brand</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/view-service">Services</Link>
        </li>


        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/add-service">Add Services</Link></li>
            <div className="dropdown-divider"></div>
            <li><Link className="dropdown-item" to="/view-service">View All Services</Link></li>
          </ul>
        </li> */}


        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Problems
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/add-problem">Add Problems</Link></li>
            <div className="dropdown-divider"></div>
            <li><Link className="dropdown-item" to="/view-problem">View All Problems</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
