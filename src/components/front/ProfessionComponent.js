import React from 'react';
import '../../styles/Header.css';
const ProfessionComponent = ({profession}) => {
    return (
        <>

            <div className="col-4 text-center">
                <img className="img" src={`http://localhost:5000/uploads/${profession.img}`}/>
                <p className="title">{profession.title}</p>

            </div>

        </>
    );
}

export default ProfessionComponent;
