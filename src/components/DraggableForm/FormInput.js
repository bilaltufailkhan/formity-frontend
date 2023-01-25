import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Input } from "reactstrap";

function FormInput(props) {
  // return props.input.placeholderText;
  return (
    <Draggable draggableId={props.input.id} index={props.index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{
            // width: "1500px",
            height: "auto",
            background: "#efefef",
            marginBottom: "1rem",
            paddingLeft: "1rem",
          }}
        >
          {/* <p className="text-muted">{props.input.inputName}</p> */}
          <Input
            // ref={provided.innerRef}
            type={props.input.type}
            name={props.input.inputName}
            placeholder={props.input.placeholderText}
          />
        </div>
      )}
    </Draggable>
  );
}

export default FormInput;
