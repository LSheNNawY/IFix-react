import React, {useEffect, useState} from 'react';
import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";
import HeaderComponent from "../components/front/HeaderComponent";
import ProfessionComponent from "../components/front/ProfessionComponent";

const ajaxGetProfessions = async (professionsNum = '3') => {
    const data = await (await fetch(`${process.env.REACT_APP_API_URL}/professions?professions=${professionsNum}`)).json();
    return data;
}

const Home = () => {
    const [professions, setProfessions] = useState([]);

    useEffect(() => {
        ajaxGetProfessions(3).then((data) => {
            setProfessions(data);
             console.log(data);
        })
    }, [])
    return (
        <>
            <NavbarComponent/>
            <HeaderComponent/>

            <section className="category " style={{padding:"120px 0"}}>
                <div className="container">
                    <div className="row ">
                        <div className="images col-12">
                            <div className="row justify-content-center align-items-center align-baseline">

                                {
                                    professions.map(profession => <ProfessionComponent profession={profession} key={profession._id}/>)
                                }
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <section className="about">
                <div className="container">
                    <div className="row ">
                        <div className="col-12">
                            <h4 className="about-heading">How IFIX Works?</h4>
                            <div className="spaceAround row ">

                                <div className="about-work col-sm-12 col-md-3">
                                    <p className="title">It is a long established</p>
                                    <span className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</span>
                                </div>

                                <div className="about-work col-sm-12 col-md-3">
                                    <p className="title">It is a long established</p>
                                    <span className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</span>
                                </div>

                                <div className="about-work col-sm-12 col-md-3">
                                    <p className="title">It is a long established</p>
                                    <span className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <FooterComponent/>
        </>
    );
};

export default Home;
