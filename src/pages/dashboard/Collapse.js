import React,{useState} from "react";
import "../../styles/CollapseTable.css";
import axios from "axios";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";

import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";


function CollapseTable({ profession ,setProfession}) {

    const deleteProfission = (id) => {
        if (window.confirm("Are you sure?")) {

            axios.delete(process.env.REACT_APP_API_URL + "/professions/" + id).then((res) => {
                setProfession((olddata) =>
                    olddata.filter((profession) => profession._id !== id)
                );
            })
        }
    }
    return (
        <>

            <tr>
                <td>{profession._id}</td>
                <td>{profession.title}</td>
                <td>{profession.img}</td>
                <td
                    data-toggle="collapse"
                    data-target={"#demo1" + profession._id}
                    className="accordion-toggle"
                >
                    <button className="btn btn-primary btn-xs">
                        <span className="fas fa-eye"></span>
                    </button>
                </td>
                <td>
                    <Button variant="outline-primary">Edit</Button>{" "}
                    <Button variant="outline-danger"
                            onClick={() => deleteProfission(profession._id)}>Delete</Button>{" "}
                </td>
            </tr>
            <tr>
                <td colSpan="12" className="hiddenRow">
                    <div
                        className="accordian-body collapse"
                        id={"demo1" + profession._id}
                    >
                        <table className="table table-striped">
                            <thead>
                            <tr className="info">
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                            </tr>
                            </thead>

                            <tbody>
                            {profession.services.map(
                                (service, i) => {
                                    return (
                                        
                                            <tr
                                                data-toggle="collapse"
                                                className="accordion-toggle"
                                                key={i}
                                                >
                                                <td> {service.title}</td>
                                                <td> {service.description}</td>
                                                <td> {service.price}</td>
                                            </tr>
                                    );
                                }
                            )}
                            </tbody>
                        </table>
                    </div>
                </td>
            </tr>
        </>

    )
}
export default CollapseTable;
