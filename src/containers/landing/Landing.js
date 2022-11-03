import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import './landing.css';

const Landing = () => {
  return (
  <Container fluid className="landing bgImage">
      <Row >
        <Col className="titles bgOpacity">
          <p><h1>BAKI Renovations</h1></p>
          <p>
            <h3>Ottawa and Gatineau area Home Renovations company.<br/>Text us with the enquiry or just give us a call.</h3>
            <h3>Check down some of the projects we do.</h3>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Landing