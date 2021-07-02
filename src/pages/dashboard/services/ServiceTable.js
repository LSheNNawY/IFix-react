import React, { useState } from "react";
import "../../../styles/CollapseTable.css";
import axios from "axios";
import EditService from "./EditService";

function ServiceTable({ profession, setProfession }) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedService, setSelectedService] = useState({
    service: "",
    description: "",
    price: "",
  });

  const handleEditService = (service) => {
    setModalShow(true);
    setSelectedService(service);
  };

  const handleDeleteService = async (id) => {
    if (window.confirm("Are you sure?")) {
      let services = profession.services;
      let data = {};
      services = services.filter((service) => service._id !== id);
      data = {
        services: services,
      };
      await axios
        .put(
          process.env.REACT_APP_API_URL + "/professions/" + profession._id,
          data,
          {
            "Content-Type": "multipart/form-data",
          }
        )
        .then(({ data }) => {
          setProfession(data);
        });
    }
  };
  return (
    <>
      <EditService
        profession={profession}
        setProfession={setProfession}
        selectedService={selectedService}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <table className="table table-striped">
        <thead>
          <tr className="info">
            <th>Service</th>
            <th>Description</th>
            <th>Price</th>
            <th>Icon</th>
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
                  <i className={`fas fa-${service.icon}`} style={{fontSize:"19px"}}> </i>
                </td>
                <td>
                  {" "}
                  <button
                    className="btn btn-warning mr-1"
                    onClick={() => handleEditService(service)}
                  >
                    <i className="fa fa-pen"></i>
                  </button>
                  <button
                    className="btn btn-danger mr-1"
                    onClick={() => handleDeleteService(service._id)}
                  >
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
