import { Container, Row } from "react-bootstrap";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <Container fluid="md">
      <Row className="d-flex justify-content-center  justify-items-center" style={{paddingTop: "60px", paddingBottom:"20px"}}>
          <ReactLoading type="bars" color="#ffc446" />
      </Row>
    </Container>
  );
};

export default Loading;
