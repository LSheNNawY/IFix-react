import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import Search from "../../components/dashboard/search/Search";
import Profile from "./forms/Profile";
import PaginationComponent from "../../components/dashboard/Pagination/PaginationComponent"
import dateFormat from "dateformat";
import Loading from "../../components/Loading";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [profileInfo, setProfileInfo] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleLockUser = (id, status) => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/users/${id}/${status}`)
      .then(({ data }) => {
        console.log(data);
        setUsers((oldUsers) => {
          const newUsers = oldUsers.filter((user) => {
            if (user._id === id) user.status = data.status;
            return user;
          });
          return newUsers;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/users/${id}`)
        .then(({ data }) => {
          setUsers((oldUsers) => oldUsers.filter((user) => user._id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/users?page=${pageNumber}`)
      .then(({ data }) => {
        setUsers(data.users);
        setTotalPages(data.totalPages);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pageNumber]);

  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card className="strpied-tabled-with-hover">
            <Card.Header>
              <Card.Title as="h4">Users</Card.Title>
              <p className="card-category">control</p>
              <div className="row mt-4">
                <div className="col-md-6">
                  {/* search component */}
                  <Search
                    setResult={setUsers}
                    searchFor={"users"}
                    setTotalPages={setTotalPages}
                  />
                </div>
              </div>
            </Card.Header>
            <Card.Body className="table-full-width table-responsive px-0">
              {loading ? (
                <Loading />
              ) : (
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">#</th>
                      <th className="border-0">First name</th>
                      <th className="border-0">Last name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Phone number</th>
                      <th>Address</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">Joined</th>
                      <th className="border-0">Controls</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => {
                      return (
                        <tr key={user._id}>
                          <td>{index + 1}</td>
                          <td>
                            <Link to={`/admin/jobs?userId=${user._id}`}>
                              {user.firstName.toLowerCase()}
                            </Link>
                          </td>
                          <td>{user.lastName.toLowerCase()}</td>
                          <td>{user.email}</td>
                          <td>{user.phone}</td>
                          <td>{user.address}</td>
                          <td>
                            <span
                              className={
                                user.status === "active"
                                  ? "badge bg-success text-light"
                                  : "badge bg-danger text-light"
                              }
                            >
                              {user.status}
                            </span>
                          </td>
                          <td>
                            {" "}
                            {dateFormat(
                              user.created_at,
                              "mmmm dS, yyyy - h:MM TT"
                            )}
                          </td>
                          <td>
                            <button
                              className="btn btn-danger mr-1"
                              onClick={() => handleDeleteUser(user._id)}
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                            {user.status === "blocked" &&
                            user.status !== "pending activation" ? (
                              <button
                                className="btn btn-info"
                                onClick={() =>
                                  handleLockUser(user._id, "unblock")
                                }
                              >
                                <i className="fa fa-lock-open"></i>
                              </button>
                            ) : (
                              <button
                                className="btn btn-info"
                                onClick={() =>
                                  handleLockUser(user._id, "block")
                                }
                              >
                                <i className="fa fa-lock"></i>
                              </button>
                            )}
                            <button
                              className="btn btn-primary ml-1"
                              onClick={() => {
                                setShowProfile(true);
                                setProfileInfo(user);
                              }}
                            >
                              <i className="fa fa-user"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {profileInfo != null ? (
        <Profile
          user={profileInfo}
          show={showProfile}
          setShow={setShowProfile}
        />
      ) : null}

      {!loading ? (
        <PaginationComponent
          pageNumber={pageNumber}
          totalPages={totalPages}
          setPageNumber={setPageNumber}
        />
      ) : null}
    </Container>
  );
}
