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
            class="collapse navbar-collapse float-end col-md-4"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class={`nav-link ${location.pathname === '/'? 'active' : ''}`} aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${location.pathname === '/professions'? 'active' : ''}`} to="/professions">
                  SERVICES
                </Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${location.pathname === '/aboutUs'? 'active' : ''}`} to="/aboutUs">
                  ABOUT
                </Link>
              </li>
              <li class="nav-item">
                <Link class={`nav-link ${location.pathname === '/contact'? 'active' : ''}`} to="/contact">
                  CONTACT
                </Link>
              </li>
              <li class="nav-item" style={{ backgroundColor: "#ffc446" }}>
                <a class="nav-link " href="#">
                  LOGOUT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
