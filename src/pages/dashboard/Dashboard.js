import React, { useEffect, useState } from "react";
// react-bootstrap components
import axios from "axios";

import {
  Card,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

const StatisticsTotal = async () => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/statisticstotal`);
};

const StatisticsTotalRecent = async () => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL}/statisticstotalrecent`
  );
};
function Dashboard() {
  const [userCountTotal, setUserCountTotal] = useState(0);
  const [employeeCountTotal, setemployeeCountTotal] = useState(0);
  const [jobCountTotal, setjobCountTotal] = useState(0);

  const [userCountTotalRecent, setUserCountTotalRecent] = useState(0);
  const [employeeCountTotalRecent, setemployeeCountTotalRecent] = useState(0);
  const [jobCountTotalRecent, setjobCountTotalRecent] = useState(0);

  useEffect(() => {
    StatisticsTotal().then(({ data }) => {
      setUserCountTotal(data.TotalCountUsers);
      setemployeeCountTotal(data.TotalCountEmployees);
      setjobCountTotal(data.TotalCountJobs);
    });
  });
  useEffect(() => {
    StatisticsTotalRecent().then(({ data }) => {
      console.log(data.TotalCountUsers);

      setUserCountTotalRecent(data.TotalCountUsers);
      setemployeeCountTotalRecent(data.TotalCountEmployees);
      setjobCountTotalRecent(data.TotalCountJobs);
    });
  });

  return (
    <>
      <Container fluid>
        {/* Recents */}
        <h4>Recents</h4>
        <Row>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i
                        className="fas fa-users"
                        style={{ color: "#FF9500" }}
                      ></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Clients</p>
                      <Card.Title as="h4">{userCountTotalRecent}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats"></div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i
                        className="fas fa-user-secret"
                        style={{ color: "#87CB16" }}
                      ></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Employees</p>
                      <Card.Title as="h4">
                        {employeeCountTotalRecent}
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats"></div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i
                        className="fas fa-briefcase"
                        style={{ color: "#FF4A55" }}
                      ></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Jobs</p>
                      <Card.Title as="h4">{jobCountTotalRecent}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats"></div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        {/* Total */}
        <h4>Total</h4>
        <Row>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i
                        className="fas fa-users"
                        style={{ color: "#FF9500" }}
                      ></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Clients</p>
                      <Card.Title as="h4">{userCountTotal}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats"></div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i
                        className="fas fa-user-secret"
                        style={{ color: "#87CB16" }}
                      ></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Employees</p>
                      <Card.Title as="h4">{employeeCountTotal}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats"></div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i
                        className="fas fa-briefcase"
                        style={{ color: "#FF4A55" }}
                      ></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Jobs</p>
                      <Card.Title as="h4">{jobCountTotal}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats"></div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
