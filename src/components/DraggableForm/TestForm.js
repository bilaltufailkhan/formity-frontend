import CustomInputField from "components/Elements/InputField";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { v4 as uuidv4 } from 'uuid';

function TestForm() {
  const [inputs, setInputs] = useState([
    { id: "001", placeholderText: "", type: "text" },
    { id: "002", placeholderText: "", type: "email" },
    { id: "003", placeholderText: "", type: "number" },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newInputs = [...inputs];
    const [removedInput] = newInputs.splice(result.source.index, 1);
    newInputs.splice(result.destination.index, 0, removedInput);

    setInputs(newInputs);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="input-list">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="input-list"
          >
            {inputs.map((input, index) => (
              <Draggable key={input.id} draggableId={input.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="input-item p-4"
                  >
                    {/* <input
                      type="text"
                      value={input.value}
                      className="form-control"
                    /> */}
                    <CustomInputField
                      placeholder={input.placeholderText}
                      type={input.type}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TestForm;
