import React from "react";
import { Link } from "react-router-dom";
import '../../assets/front/css/navbar.css'

const NavbarComponent = () => {
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
                                <a
                                    class="nav-link  active"
                                    aria-current="page"
                                    href="index.html"
                                >
                                    HOME
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    aria-current="page"
                                    href="services.html"
                                >
                                    SERVICES
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  " href="/aboutUs">
                                    ABOUT
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  " href="contact.html">
                                    CONTACT
                                </a>
                            </li>
                            <li
                                class="nav-item"
                                style={{ backgroundColor: "#ffc446" }}
                            >
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
