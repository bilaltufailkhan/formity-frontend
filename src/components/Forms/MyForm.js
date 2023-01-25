import CustomInputField from "components/Elements/InputField";
import React from "react";

const MyForm = ({ controlID }) => {
  return (
    <>
      <div id={controlID}>
        <CustomInputField type="text" name="my-field" />
      </div>
    </>
  );
};

export default MyForm;
