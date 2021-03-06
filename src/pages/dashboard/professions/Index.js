import React, { useEffect, useState } from "react";
import axios from "axios";

import ProfessionTable from "./ProfessionTable";
import CreateProfession from "./CreateProfession";
// react-bootstrap components
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";
import Search from "../../../components/dashboard/search/Search";
import PaginationComponent from "../../../components/dashboard/Pagination/PaginationComponent";
import Loading from "../../../components/Loading";


function Index() {
  const [professions, setProfessions] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/professions?page=${pageNumber}`)
      .then(({ data }) => {
        setProfessions(data.professions);
        setTotalPages(data.totalPages);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      });
  }, [pageNumber]);

  return (
    <>
      <CreateProfession
        professions={professions}
        setProfessions={setProfessions}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Professions</Card.Title>
                <p className="card-category">control</p>
                <div className="row mt-4">
                  <div className="col-md-6">
                    {/* search component */}
                    <Search
                      setResult={setProfessions}
                      searchFor={"professions"}
                      setTotalPages={setTotalPages}
                    />
                  </div>
                </div>
                <div className="float-right">
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    <i className="fa fa-plus"></i>
                    New Profession
                  </Button>
                </div>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                {loading ? (
                  <Loading />
                ) : (
                  <Table className="table-hover table-striped text-center profession">
                    <thead>
                      <tr>
                        <th className="border-0">#</th>
                        <th className="border-0 profession">TITLE</th>
                        <th className="border-0">IMAGE</th>
                        <th className="border-0">SERVICES</th>
                        <th className="border-0">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {professions.map((profession, index) => (
                        <ProfessionTable
                          professionState={profession}
                          setProfessions={setProfessions}
                          index={index}
                          key={profession._id}
                        />
                      ))}
                    </tbody>
                  </Table>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {!loading ? (
          <PaginationComponent
            pageNumber={pageNumber}
            totalPages={totalPages}
            setPageNumber={setPageNumber}
          />
        ) : null}
      </Container>
    </>
  );
}

export default Index;
