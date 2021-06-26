import axios from "axios";
import React from "react";
import { useContext, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "../../assets/front/css/navbar.css";
import UserContext from "../../context/UserContext";

const NavbarComponent = () => {
    let { user } = useContext(UserContext);

    const location = useLocation();
    const history = useHistory();

    const handleLogout = (e) => {
        e.preventDefault();
        console.log('clicked');
        axios.post(`${process.env.REACT_APP_API_URL}/users/logout`).then(({data}) => {
            if (data.ok)
                history.push('/login');
        })
    }

    return (
        <div className="navbar-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Navbar
                    </Link>
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
                            {user ? (
                                <>
                                    <li className="nav-item dropdown">
                                        <span
                                            className="nav-link dropdown-toggle"
                                            id="navbarDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="fas fa-user"></i>
                                        </span>
                                        <div
                                            className="dropdown-menu"
                                            aria-labelledby="navbarDropdown"
                                        >
                                            {user.role === "employee" && (
                                                <Link
                                                    className="dropdown-item"
                                                    to="/jobs"
                                                >
                                                    My Jobs
                                                </Link>
                                            )}
                                            <Link
                                                className="dropdown-item"
                                                to={`/profile`}
                                            >
                                                Profile
                                            </Link>
                                            <div className="dropdown-divider"></div>
                                            <Link
                                            onClick={(e) => handleLogout(e)}
                                                className="dropdown-item"
                                                to="/logout"
                                            >
                                                Logout
                                            </Link>
                                        </div>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link
                                            className={`nav-link ${
                                                location.pathname === "/login"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            to="/login"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavbarComponent;
