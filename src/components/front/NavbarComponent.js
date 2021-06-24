import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/front/css/navbar.css";

const NavbarComponent = () => {
  const location = useLocation();
  return (
    <div className="navbar-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse col-4"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  class={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class={`nav-link ${
                    location.pathname === "/professions" ? "active" : ""
                  }`}
                  to="/professions"
                >
                  SERVICES
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class={`nav-link ${
                    location.pathname === "/aboutUs" ? "active" : ""
                  }`}
                  to="/aboutUs"
                >
                  ABOUT
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                 <i class="fas fa-user"></i>
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/jobs">
                    My Jobs
                  </Link>
                  <Link className="dropdown-item" to="/profile/:id">
                    Profile
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" href="#">
                    Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
