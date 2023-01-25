import BasicForm from "components/Forms/BasicForm";
import TopNavigation from "components/Navbars/TopNavigation";
import Sidebar from "components/Sidebar/Sidebar";
import PerfectScrollbar from "perfect-scrollbar";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Label,
  Row,
} from "reactstrap";

var ps;
const Community = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const mainPanel = React.useRef();
  const location = useLocation();
  React.useEffect(() => {
    if (navigator?.userAgentData?.platform?.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator?.userAgentData?.platform?.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
  return (
    <>
      {/* <div className="">
        <Container>
          <h1>Community</h1>
          <FormSection />
          <CollapseForm />
          <DynamicForms />
          <Test />
        </Container>
      </div> */}
      <div className="wrapper">
        <Sidebar {...props} />
        <div className="main-panel" ref={mainPanel}>
          <TopNavigation {...props} />
          <Container
            className="sticky-top form-header"
            style={{ background: "#fff" }}
          >
            <Row className="d-flex justify-content-space-between align-items-center py-2">
              <Col xs={6}>
                <h6>
                  <b>Name of the Report</b>
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
            </Row>
          </Container>
          <Container>
            <Row>
              <Col lg={8}>
                <BasicForm />
              </Col>
              <Col lg={4} className="sticky-top pt-4 right-sidebar">
                <a href="#personal-details" className="nav-link">
                  Personal Details
                </a>
                <a href="#plan-details" className="nav-link">
                  Plan Details
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Community;
