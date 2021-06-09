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
            // console.log(data);
        })
    }, [])
    return (
        <>
            <NavbarComponent/>
            <HeaderComponent/>

            <section className="category">
                <div className="container">
                    <div className="row">
                        {
                            professions.map(profession => <ProfessionComponent profession={profession} key={profession._id}/>)
                        }
                    </div>
                </div>
            </section>

            <FooterComponent/>
        </>
    );
};

export default Home;
