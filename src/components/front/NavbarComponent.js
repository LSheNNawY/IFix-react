import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/front/css/navbar.css";

const NavbarComponent = () => {
    const location = useLocation();
    return (
        <div className="navbar-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Navbar
                    </a>
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
                    <div
                        className="collapse navbar-collapse float-end col-md-4"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${
                                        location.pathname === "/"
                                            ? "active"
                                            : ""
                                    }`}
                                    aria-current="page"
                                    to="/"
                                >
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${
                                        location.pathname === "/professions"
                                            ? "active"
                                            : ""
                                    }`}
                                    to="/professions"
                                >
                                    SERVICES
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${
                                        location.pathname === "/aboutUs"
                                            ? "active"
                                            : ""
                                    }`}
                                    to="/aboutUs"
                                >
                                    ABOUT
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${
                                        location.pathname === "/contact"
                                            ? "active"
                                            : ""
                                    }`}
                                    to="/contact"
                                >
                                    CONTACT
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <span
                                    className="nav-link dropdown-toggle"
                                    // to=""
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </span>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <Link className="dropdown-item" to="/jobs">
                                        My Jobs
                                    </Link>
                                    <Link
                                        className="dropdown-item"
                                        to="/profile/:id"
                                    >
                                        Profile
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="">
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
