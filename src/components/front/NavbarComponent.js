import axios from "axios";
import React from "react";
import { useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "../../assets/front/css/navbar.css";
import logo from "../../assets/front/img/two.jpeg";
// import "../../assets/front/css/index.css";

/*const NavbarComponent = () => {
  const { user, getUser } = useContext(UserContext);

   const Logout = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/users/logout`);
    await getUser();
    history.push("/");
  };
  const location = useLocation(); 
  const history = useHistory();*/

const NavbarComponent = () => {
  let { user } = useContext(UserContext);

  const location = useLocation();
  const history = useHistory();
  const { getUser } = useContext(UserContext);

  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/logout`)
      .then(({ data }) => {
        if (data.ok) {
          getUser();
          history.push("/login");
        }
      });
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} style={{width:"70px",height:"50px"}}/><span style={{marginLeft:"5px", fontSize:"27px"}}>IFIX</span>
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbar-togglerDemo02"
            aria-controls="navbar-togglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>

            <span className="line"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbar-togglerDemo02">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
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
                    location.pathname === "/professions" ? "active" : ""
                  }`}
                  to="/professions"
                >
                  SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/aboutUs" ? "active" : ""
                  }`}
                  to="/aboutUs"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
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
                        <Link className="dropdown-item" to="/jobs">
                          My Jobs
                        </Link>
                      )}
                      <Link className="dropdown-item" to={`/profile`}>
                        Profile
                      </Link>
                      <div className="dropdown-divider"></div>
                      <span
                        onClick={(e) => handleLogout(e)}
                        className="dropdown-item"
                        style={{ cursor: "pointer" }}
                      >
                        Logout
                      </span>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/login" ? "active" : ""
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
