import React, { useRef } from "react";
import { Container } from "reactstrap";
import ReportsView from "components/Reports";
import Sidebar from "components/Sidebar/Sidebar";
import TopNavigation from "components/Navbars/TopNavigation";
import PerfectScrollbar from "perfect-scrollbar";
import { useLocation } from "react-router-dom";
var ps;
const Reports = (props) => {
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
    // <>
    //   <div className="">
    //     <Container>

    //     </Container>
    //   </div>
    // </>
    <div className="wrapper">
      <Sidebar {...props} />
      <div className="main-panel" ref={mainPanel}>
        <TopNavigation {...props} />
        {/* {props.children} */}
        <ReportsView />
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default Reports;
