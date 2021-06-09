import React from 'react';

const FooterComponent = () => {
    return (
        <>
            <section>
                <footer className="text-center text-white mt-5" style={{background: '#ffeee5'}}>
                    <div className="container p-4 pb-0">
                        <section className="mb-4">
                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{backgroundColor: '#3b5998'}}
                                href="#!"
                                role="button"
                            ><i className="fab fa-facebook-f"></i></a>

                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{backgroundColor: '#55acee'}}
                                href="#!"
                                role="button"
                            ><i className="fab fa-twitter"></i></a>

                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{backgroundColor: '#dd4b39'}}
                                href="#!"
                                role="button"
                            ><i className="fab fa-google"></i
                            ></a>

                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{backgroundColor: '#ac2bac'}}
                                href="#!"
                                role="button"
                            ><i className="fab fa-instagram"></i></a>

                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{backgroundColor: '#0082ca'}}
                                href="#!"
                                role="button"
                            ><i className="fab fa-linkedin-in"></i></a>
                            <a
                                className="btn btn-primary btn-floating m-1"
                                style={{backgroundColor: '#333333'}}

                                href="#!"
                                role="button"
                            ><i className="fab fa-github"></i></a>
                        </section>
                    </div>

                    <div className="text-center p-3" style={{color: '#333333'}}>
                        © 2021 Copyright:
                        <a className="text-dark" href="#">IFix</a>
                    </div>
                </footer>
            </section>
        </>
    );
};

export default FooterComponent;
