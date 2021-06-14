import React, { useEffect, useState } from "react";
import axios from "axios";
import CollapseTable from '../../dashboard/Collapse'

// react-bootstrap components
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";

function Professions() {
  const [professions, setProfessions] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "/professions").then((res) => {
      setProfessions(res.data);
      // console.log(res.data);
    });
  }, []);

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


                    {
                      professions.map(profession => <CollapseTable profession={profession} key={profession._id}/>)
                    }



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default Professions;