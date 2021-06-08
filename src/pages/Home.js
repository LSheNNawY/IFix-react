import React from 'react';
import NavbarComponent from "../components/NavbarComponent";

const Home = () => {
    return (
        <>
            <NavbarComponent />
            <div className='row'>
                <div className="col col-md-4 m-auto text-center mt-5">
                    <h2>Home page</h2>
                </div>
            </div>
        </>
    );
};

export default Home;
