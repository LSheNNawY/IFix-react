import React from "react";
import "../../styles/CollapseTable.css";
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";
function CollapseTable({ professions }) {
  return (
    <>
      <div className="container">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">Professions</div>
            <div className="panel-body">
              <table className="table table-condensed table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>IMAGE</th>
                    <th>SERVICES</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>
                  {professions.map((item, index) => {
                    return (
                      <>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.title}</td>
                          <td>{item.img}</td>
                          <td
                            data-toggle="collapse"
                            data-target={"#demo1" + index}
                            class="accordion-toggle"
                          >
                            <button class="btn btn-primary btn-xs">
                              <span class="fas fa-eye"></span>
                            </button>
                          </td>
                          <td>
                            <Button variant="outline-primary">Edit</Button>{" "}
                            <Button variant="outline-danger">Delete</Button>{" "}
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="12" className="hiddenRow">
                            <div
                              className="accordian-body collapse"
                              id={"demo1" + index}
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
                                  {professions[index].services.map(
                                    (service, i) => {
                                      return (
                                        <>
                                          <tr
                                            data-toggle="collapse"
                                            class="accordion-toggle"
                                          >
                                            <td> {service.title}</td>
                                            <td> {service.description}</td>
                                            <td> {service.price}</td>
                                          </tr>
                                        </>
                                      );
                                    }
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollapseTable;
