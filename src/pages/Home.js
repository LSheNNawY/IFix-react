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
            {/*<section>*/}
            {/*    <div className="container">*/}
            {/*        <div className="row ">*/}
            {/*            <div className="col-12">*/}
            {/*                <h4>How Fixawy Works?</h4>*/}
            {/*                <div className="col-md-4">*/}
            {/*                    <p className="lead">Place your*/}
            {/*                        OrderWith our clear and flexible booking system you just need to choose the service, pick a suitable appointment and confirm your order to find one of our highly qualified repairmen at your doorstep.*/}
            {/*                        1</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</section>*/}
            <FooterComponent/>
        </>
    );
};

export default Home;
