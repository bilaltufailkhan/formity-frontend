import React from "react";
import { Input } from "reactstrap";

const CustomSelect = () => {
  return (
    <Input
      type="select"
      className="default-select"
      name="planMethod"
      id="plan-method"
    >
      <option value="" selected>
        NDIS Plan Management Method
      </option>
      <option>2</option>
      <option>3</option>
    </Input>
  );
};

export default CustomSelect;
