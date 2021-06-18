import React from "react";
import '../../assets/front/css/footer.css'

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
                        <div className="col-lg-4 col-md-6 col-sm-6">
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
                                        <i className="fas fa-map-marker-alt"></i>514
                                        Academy thomes merry St. Algonquin
                                        <br />
                                        Square, opp. IL 60102
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i> Phone: +1
                                        800 556 6688 +1 800 559 6580
                                    </li>
                                    <li>
                                        <i className="fas fa-envelope"></i> Email:
                                        IFix@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h5>Feature Services</h5>
                                <ul>
                                    <li>
                                        <a href="electricity_services.html">
                                            Electricity Service
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Service Name</a>
                                    </li>
                                    <li>
                                        <a href="#">Service Name</a>
                                    </li>
                                    <li>
                                        <a href="#">Service Name</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h5>Quick Links</h5>
                                <ul>
                                    <li>
                                        <a href="aboutUs.html">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Team</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="aboutUs.html">Locations</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h5>Newsletter</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit sed do eiusmod tempor
                                    incididunt
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterComponent;
