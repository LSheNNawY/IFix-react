import React from "react";
import "../../styles/CollapseTable.css";
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";
function CollapseTable({ professions }) {
  return (
    <>
      <div classNameName="container">
        <div classNameName="col-md-12">
          <div classNameName="panel panel-default">
            <div classNameName="panel-heading">Professions</div>
            <div classNameName="panel-body">
              <table classNameName="table table-condensed table-striped">
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
                            className="accordion-toggle"
                          >
                            <button className="btn btn-primary btn-xs">
                              <span className="fas fa-eye"></span>
                            </button>
                          </td>
                          <td>
                            <Button variant="outline-primary">Edit</Button>{" "}
                            <Button variant="outline-danger">Delete</Button>{" "}
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="12" classNameName="hiddenRow">
                            <div
                              classNameName="accordian-body collapse"
                              id={"demo1" + index}
                            >
                              <table classNameName="table table-striped">
                                <thead>
                                  <tr classNameName="info">
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
                                            className="accordion-toggle"
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
