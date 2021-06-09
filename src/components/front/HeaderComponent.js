import React from 'react';

const HeaderComponent = () => {
    return (
        <>
            <section id="banner-home" className="">
                <div className="container">
                    <div className="row no-gutters text-center main_div">
                        <h1 className="text-center col-12">Choose Your Location</h1>
                    </div>
                    <div className="flex text-center row mt-3 search-container">
                        <div className="col-12">
                            <input
                                type="text"
                                className="search-section w-50 col-10"
                                style={{height: '37px'}}
                            />
                            <button className="btn col-2 ml-2 go_btn">Let's go</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default HeaderComponent;
