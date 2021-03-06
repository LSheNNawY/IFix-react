import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import Search from "../../components/dashboard/search/Search";
import ProfileForm from "./forms/ProfileForm";
import dateFormat from "dateformat";
import PaginationComponent from "../../components/dashboard/Pagination/PaginationComponent";
import Loading from "../../components/Loading";

export default function Admins() {
  const [admins, setAdmins] = useState([]);
  const [profileInfo, setProfileInfo] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleLockAdmin = (id, status) => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/admins/${id}/${status}`)
      .then(({ data }) => {
        setAdmins((oldAdmins) => {
          const newAdmins = oldAdmins.filter((admin) => {
            if (admin._id === id) admin.status = data.status;
            return admin;
          });

          return newAdmins;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteAdmin = (id) => {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/admins/${id}`)
        .then(({ data }) => {
          setAdmins((oldAdmins) =>
            oldAdmins.filter((admin) => admin._id !== id)
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // const handleEditAdmin = (admin) => {
  //   setShowProfile(true);
  //   setProfileInfo(admin);
  // };

  const handleAddAdmin = () => {
    setShowProfile(true);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/admins?page=${pageNumber}`)
      .then(({ data }) => {
        setAdmins(data.admins);
        setTotalPages(data.totalPages);
        setRefresh(false);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refresh, pageNumber]);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Admins</Card.Title>
                <p className="card-category">control</p>
                <div className="row mt-4">
                  <div className="col-6">
                    {/* search component */}
                    <Search
                      setResult={setAdmins}
                      searchFor={"admins"}
                      setTotalPages={setTotalPages}
                    />
                  </div>
                  <div className="text-right col-6">
                    <button
                      className="btn btn-primary"
                      title="Add"
                      onClick={() => {
                        handleAddAdmin();
                      }}
                    >
                      <i className="fa fa-plus"></i> New Admin
                    </button>
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
                        <th className="border-0">Status</th>
                        <th className="border-0">Joined</th>
                        <th className="border-0">Controls</th>
                      </tr>
                    </thead>
                    <tbody>
                      {admins.map((admin, index) => {
                        return (
                          <tr key={admin._id}>
                            <td>{index + 1}</td>
                            <td>{admin.firstName.toLowerCase()}</td>
                            <td>{admin.lastName.toLowerCase()}</td>
                            <td>{admin.email}</td>
                            <td>{admin.phone}</td>
                            <td>
                              <span
                                className={
                                  admin.status === "active"
                                    ? "badge bg-success text-light"
                                    : "badge bg-danger text-light"
                                }
                              >
                                {admin.status}
                              </span>
                            </td>
                            <td>
                              {" "}
                              {dateFormat(
                                admin.created_at,
                                "mmmm dS, yyyy - h:MM TT"
                              )}
                            </td>
                            <td>
                              {/* <button
                                className="btn btn-warning mr-1"
                                onClick={() => {
                                  handleEditAdmin(admin);
                                }}
                              >
                                <i className="fa fa-pen"></i>
                              </button> */}
                              <button
                                className="btn btn-danger mr-1"
                                title="Delete"
                                onClick={() => handleDeleteAdmin(admin._id)}
                              >
                                <i className="fa fa-trash"></i>
                              </button>
                              {admin.status === "active" ? (
                                <button
                                  className="btn btn-info"
                                  title="Block"
                                  onClick={() =>
                                    handleLockAdmin(admin._id, "block")
                                  }
                                >
                                  <i className="fa fa-lock"></i>
                                </button>
                              ) : (
                                <button
                                  className="btn btn-info"
                                  title="Unblock"
                                  onClick={() =>
                                    handleLockAdmin(admin._id, "unblock")
                                  }
                                >
                                  <i className="fa fa-lock-open"></i>
                                </button>
                              )}
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
        {!loading ? (
          <PaginationComponent
            pageNumber={pageNumber}
            totalPages={totalPages}
            setPageNumber={setPageNumber}
          />
        ) : null}
      </Container>
      <ProfileForm
        show={showProfile}
        user={profileInfo}
        role="admin"
        setShow={setShowProfile}
        setInfo={setProfileInfo}
        setRefresh={setRefresh}
      />
    </>
  );
}
