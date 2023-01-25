import CustomInputField from "components/Elements/InputField";
import React from "react";
import { Card, CardBody, Col, Collapse, Container, Row } from "reactstrap";

function FormSection({ form, onDelete }) {
  return (
    <Container>
      {/* <Row className="text-right">
        <Col xs={12}>
          <button
            className="btn btn-sm btn-danger py-2"
            onClick={() => onDelete(form.label)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </Col>
      </Row> */}
      <Row>
        <Col xs={12}>
          <form.component onDelete={onDelete} form={form} />
        </Col>
      </Row>
    </Container>
  );
}

export default FormSection;
