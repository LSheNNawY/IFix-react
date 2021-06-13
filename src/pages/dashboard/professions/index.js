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
        <CollapseTable professions={professions}/>
      </>
  );
}

export default Professions;