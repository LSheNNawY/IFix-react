import { Container, Row, Col } from "react-bootstrap";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <Container fluid="md">
      <Row className="d-flex justify-content-center  justify-items-center">
        <Col>
          <ReactLoading type="bars" color="#ffc446" />
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
