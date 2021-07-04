import React from "react";
import {Container} from "react-bootstrap";

function Footer() {
    return (
        <footer className="footer px-0 px-lg-3">
            <Container fluid>
                <nav>
                    {/*<ul className="footer-menu">*/}
                    {/*    <li>*/}
                    {/*        <a href="#pablo" onClick={(e) => e.preventDefault()}>*/}
                    {/*            Home*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <a href="#pablo" onClick={(e) => e.preventDefault()}>*/}
                    {/*            Company*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <a href="#pablo" onClick={(e) => e.preventDefault()}>*/}
                    {/*            Portfolio*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <a href="#pablo" onClick={(e) => e.preventDefault()}>*/}
                    {/*            Blog*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                    <p className="copyright text-center">
                        © {new Date().getFullYear()}{" "}
                        <span className='font-weight-bold'>IFix</span>, made with
                        love for a better web
                    </p>
                </nav>
            </Container>
        </footer>
    );
}

export default Footer;
