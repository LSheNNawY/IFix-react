import React, { useState } from "react";
import "../../../styles/CollapseTable.css";
import axios from "axios";
import ServiceModal from "./editService"
// react-bootstrap components
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

function ServiceTable({ profession }) {
  const [modalShow, setModalShow] = useState(false);
  const [professionState, setProfessionState]=useState({})
  const [selectedService, setSelectedService]=useState({})

  const handleEditService = (professionId,serviceId)=>{
    setModalShow(true)
    axios
    .get(process.env.REACT_APP_API_URL + "/professions/"+ professionId)
    .then(({data}) => {
      setProfessionState(data);
      let services = data.services;
      let service = services.filter( service => service._id = serviceId )
      service = service? service[0] : null;
      setSelectedService(service)
    });
  }
  return (
    <>
      <ServiceModal professionState={professionState} setProfessionState={setProfessionState} selectedService={selectedService} show={modalShow} onHide={() => setModalShow(false)} />
      <table className="table table-striped">
        <thead>
          <tr className="info">
            <th>Service</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {profession.services.map((service, i) => {
            return (
              <tr data-toggle="collapse" className="accordion-toggle" key={i}>
                <td> {service.service}</td>
                <td> {service.description}</td>
                <td> {service.price}</td>
                <td>
                  {" "}
                  <button className="btn btn-warning mr-1" onClick={()=>handleEditService(profession._id,service._id)}>
                    <i className="fa fa-pen"></i>
                  </button>
                  <button className="btn btn-danger mr-1">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default ServiceTable;
