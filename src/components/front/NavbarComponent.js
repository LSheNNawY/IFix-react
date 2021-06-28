import React from "react";
import { useContext } from "react";
import { Link, useLocation} from "react-router-dom";
import "../../assets/front/css/navbar.css";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router";
import axios from "axios";
const NavbarComponent = () => {
    const { user,getUser } = useContext(UserContext);
    const location = useLocation();
    const history = useHistory();
    const Logout = async () => {
        await axios.post(`${process.env.REACT_APP_API_URL}/users/logout`);
        await getUser();
        history.push("/");
      };
 

    
    return (
        <div className="navbar-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Navbar
                    </a>
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbar-togglerDemo02"
                        aria-controls="navbar-togglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="line"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse  "
                        id="navbar-togglerDemo02"
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
                                        <Link
                                            className="nav-link dropdown-toggle"
                                            id="navbarDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i class="fas fa-user-alt"></i>
                                        </Link>
                                        <div
                                            className="dropdown-menu"
                                            aria-labelledby="navbarDropdown"
                                        >
                                            <Link
                                                className="dropdown-item"
                                                to="/jobs"
                                            >
                                                My Jobs
                                            </Link>
                                            <Link
                                                className="dropdown-item"
                                                to={`/profile/${user.id}`}
                                            >
                                                Profile
                                            </Link>
                                            <div className="dropdown-divider"></div>
                                            <button
                                                onClick={Logout}
                                                className="dropdown-item"
                                                //style={{ outline: "none" }}
                                            >
                                                Logout
                                            </button>
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
