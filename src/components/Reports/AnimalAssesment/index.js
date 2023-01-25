import axios from "axios";
import TopNavigation from "components/Navbars/TopNavigation";
import PerfectScrollbar from "perfect-scrollbar";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { api } from "utils/constants";
import DynamicForm from "./DynamicForm";
import Header from "./Header";
import RightSidebar from "./Sidebar";
import Sidebar from "../../Sidebar/Sidebar";

var ps;
function AnimalAssesment(props) {
  const [forms, setForms] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${api}/get-fields`);
        console.log("This is the response object: ", response?.data?.data);
        setForms(response?.data?.data);
        setTitle(response?.data?.data?.name);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // Layout functions
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
      <div className="wrapper">
        <Sidebar {...props} />
        <div className="main-panel" ref={mainPanel}>
          <TopNavigation {...props} />
          <Container fluid className="dynamic-form-cotainer">
            <Row
              className="d-flex justify-content-space-between align-items-center py-2 sticky-top bg-white"
              style={{ zIndex: "3091" }}
            >
              <Header reportName={title} />
            </Row>
            <Row className="d-flex flex-row">
              <Col lg={8}>
                <DynamicForm sections={forms} />
              </Col>
              <Col
                lg={3}
                className="position-fixed py-5 right-sidebar"
                style={{ zIndex: "3090", right: "15px" }}
              >
                <h5>Quick Links</h5>
                <RightSidebar formLinks={forms} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AnimalAssesment;
