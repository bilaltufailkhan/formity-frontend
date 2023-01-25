import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./formData";
import FormTitle from "./FormTitle";

const DraggableForm = () => {
  // const [formState, setFormState] = useState(initialData);
  const formState = initialData;
  // const inputRef = forwardRef();

  const onDragEnd = (result) => {
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {formState.formOrder.map((formId) => {
        const forms = formState.forms[formId];
        const inputs = forms.inputIds.map(
          (inputId) => formState.inputs[inputId]
        );
        return (
          <FormTitle
            ref={inputRef}
            key={forms.id}
            forms={forms}
            inputs={inputs}
          />
        );
      })}
    </DragDropContext>
  );
};

export default DraggableForm;
