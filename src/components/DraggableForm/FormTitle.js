import React from "react";
import { Col, Container, Row } from "reactstrap";
import FormInput from "./FormInput";

import { Droppable } from "react-beautiful-dnd";

function FormTitle(props) {
  return (
    <div>
      <form>
        <Container>
          <Row>
            <Col lg={6}>{props.forms.title}</Col>
            <Droppable droppableId={props.forms.id}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Col lg={12}>
                    {props.inputs.map((input, index) => (
                      <FormInput key={input.id} input={input} index={index} />
                    ))}
                    {provided.placeholder}
                  </Col>
                </div>
              )}
            </Droppable>
          </Row>
        </Container>
        {/* <FormInput /> */}
      </form>
    </div>
  );
}

export default FormTitle;
