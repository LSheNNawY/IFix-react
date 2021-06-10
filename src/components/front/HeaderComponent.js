import React from 'react';
import '../../styles/Header.css';

const HeaderComponent = () => {
    return (
        <>
            <section id="banner-home" className="">
                <div
                    style={{
                        width: "100%",
                        height: 600,
                        background: `url('${process.env.PUBLIC_URL}/images/cover.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                </div>
            </section>
        </>
    );
};

export default HeaderComponent;
