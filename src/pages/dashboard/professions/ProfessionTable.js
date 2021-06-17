import React, { useState } from "react";
import "../../../styles/CollapseTable.css";
import axios from "axios";
import ServiceTable from "../services/ServiceTable";

// react-bootstrap components
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import EditProfession from "./EditProfession";

function ProfessionTable({
  professionState,
  setProfessions,
  index,
  setRefresh,
}) {
  const [modalShow, setModalShow] = useState(false);
  const [profession, setProfession] = useState(professionState);

  const deleteProfission = (id) => {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(process.env.REACT_APP_API_URL + "/professions/" + id)
        .then((res) => {
          setProfessions((olddata) =>
            olddata.filter((profession) => profession._id !== id)
          );
        });
    }
  };

  return (
    <>
      <EditProfession
        setRefresh={setRefresh}
        profession={profession}
        setProfession={setProfession}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <tr>
        <td>{index + 1}</td>
        <td>{profession.title}</td>
        <td>{profession.img}</td>
        <td>
          <button
            data-toggle="collapse"
            data-target={"#demo1" + profession._id}
            className="accordion-toggle"
            className="btn btn-primary mr-1"
          >
            <span className="fas fa-eye"></span>
          </button>
        </td>
        <td>
          <button
            className="btn btn-warning mr-1"
            onClick={() => setModalShow(true)}
          >
            <i className="fa fa-pen"></i>
          </button>
          <button
            className="btn btn-danger mr-1"
            onClick={() => deleteProfission(profession._id)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
      <tr>
        <td colSpan="12" className="hiddenRow">
          <div
            className="accordian-body collapse"
            id={"demo1" + profession._id}
          >
            <ServiceTable
              profession={profession}
              setProfession={setProfession}
            />
          </div>
        </td>
      </tr>
    </>
  );
}
export default ProfessionTable;
