import React from "react";
import '../../assets/front/css/footer.css'
import {Link} from "react-router-dom";

const FooterComponent = () => {
    return (
        <div className="footer-wrapper">
            <footer className="footer">
                <div className="container-fluid">
                    <div
                        className="row"
                        style={{
                            width: "90%",
                            marginLeft: "5%",
                        }}
                    >
                        <div className="col-4">
                            <div className="footer__about">
                                <div className="footer__logo">
                                    <a
                                        href="#"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <h2 style={{ color: "white" }}>IFIX</h2>
                                    </a>
                                </div>
                                <ul>
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i>ITI
                                        <br />
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i> Phone: +2
                                        01286680617
                                    </li>
                                    <li>
                                        <i className="fas fa-envelope"></i> Email:
                                        IFix@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="footer__widget">
                                <h5>Quick Links</h5>
                                <ul>
                                    <li>
                                        <Link to="/aboutUs">About</Link>
                                    </li>

                                    <li>
                                        <Link to="/contact">Contact Us</Link>

                                    </li>
                                    <li>
                                        <Link to="/professions">Services</Link>

                                    </li>

                                </ul>
                            </div>
                        </div>


                        <div className="col-4">
                            <div className="footer__widget">
                                <h5>Follow us on</h5>
                                <ul>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-facebook-square"></i> Facebook
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="">
                                            <i className="fab fa-twitter-square"></i> Twitter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-instagram"></i> Instagram
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterComponent;
