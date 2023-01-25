import { Button } from "bootstrap";
import React from "react";

const CustomButton = ({ title, onClick }) => {
  return <Button className="custom-button">{title}</Button>;
};

export default CustomButton;
