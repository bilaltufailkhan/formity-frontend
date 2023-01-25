import React from "react";
import { Col, Container, Row } from "reactstrap";

const NotFound = () => {
  return (
    <Container>
      <Row className="d-flex vh-100 align-items-center justify-content-center text-center">
        <Col xs={12}>
          <h1>404 Page not Found</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
