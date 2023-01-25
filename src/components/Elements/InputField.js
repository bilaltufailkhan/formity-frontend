import React from "react";
import { Input } from "reactstrap";

const CustomInputField = ({
  type,
  id,
  name,
  placeholder,
  onChange,
  onClick,
  ocFocus,
  option,
}) => {
  return (
    <div className="default-input-field">
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        className="default-input"
      />
    </div>
  );
};

export default CustomInputField;
