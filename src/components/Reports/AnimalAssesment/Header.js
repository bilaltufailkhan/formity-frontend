import React, { useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Label,
} from "reactstrap";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Col xs={6}>
        <h6>
          <b>{props.reportName}</b>
        </h6>
        <span className="text-muted">Created: 01.01.2023</span>
      </Col>
      <Col
        xs={6}
        className="text-right d-flex align-items-center justify-content-end"
      >
        <Label className="mr-2">Status: </Label>
        <Dropdown isOpen={isOpen} direction={"left"} toggle={toggle}>
          <DropdownToggle caret>Select</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Draft</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Publish</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reject</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div className="border-left ml-2">
          <Button className="ml-2 close-form-button">
            <i className="fa-solid fa-multiply"></i>
          </Button>
        </div>
      </Col>
    </>
  );
}

export default Header;
