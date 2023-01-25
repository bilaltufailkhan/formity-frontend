import TestForm from "components/DraggableForm/TestForm";
import TopNavigation from "components/Navbars/TopNavigation";
import Sidebar from "components/Sidebar/Sidebar";
import PerfectScrollbar from "perfect-scrollbar";
import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "reactstrap";

var ps;
const AssistiveTech = (props) => {
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
          <div className="content">
            <Container>
              <h1>AssistiveTech</h1>
              {/* <DraggableForm /> */}
              <TestForm />
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssistiveTech;
