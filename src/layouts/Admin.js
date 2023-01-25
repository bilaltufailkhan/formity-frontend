import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar.js";
import routes from "../routes";
import DashboardAdmin from "views/Dashboard";
import TopNavigation from "components/Navbars/TopNavigation";

var ps;

function Dashboard(props) {
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
    <div className="wrapper">
      <Sidebar {...props} />
      <div className="main-panel" ref={mainPanel}>
        <TopNavigation {...props} />
        {/* {props.children} */}
        <DashboardAdmin />
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default Dashboard;
