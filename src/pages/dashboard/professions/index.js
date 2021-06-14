import React, { useEffect, useState } from "react";
import axios from "axios";
import CollapseTable from "../../dashboard/Collapse";
import { Link } from "react-router-dom";

// react-bootstrap components
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";

function Professions() {
  const [professions, setProfessions] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "/professions").then((res) => {
      setProfessions(res.data);
    });
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Professions</Card.Title>
                <p className="card-category">control</p>
                <div className="float-right">
                  <button  to="/new"className="btn btn-primary">
                    <i className="fa fa-plus"></i> <Link to="/admin/new">New Profession</Link>
                  </button>
                </div>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                    <th   className="border-0">#</th>
                      <th className="border-0">TITLE</th>
                      <th className="border-0">IMAGE</th>
                      <th className="border-0">SERVICES</th>
                      <th className="border-0">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {professions.map((profession, index) => (
                      <CollapseTable
                        profession={profession}
                        setProfession={setProfessions}
                        index={index}
                        key={profession._id}
                      />
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Professions;
