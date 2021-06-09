import React from 'react';
import {Link} from "react-router-dom";

const NavbarComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar-togglerDemo02"
                    aria-controls="navbar-togglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line" style={{marginBottom: 0}}></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar-togglerDemo02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Logo</Link>
                        </li>
                    </ul>

                    {/*<form className="m-2 login-link" action="#" method="POST">*/}
                    {/*    <input type="submit" value="login" className="btn logout"/>*/}
                    {/*</form>*/}
                    <Link to='/login' className="btn btn-outline-light text-dark">Login</Link>
                </div>
            </nav>
        </>
    );
};

export default NavbarComponent;
