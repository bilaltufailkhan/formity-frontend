import TopNavigation from "components/Navbars/TopNavigation";
import Sidebar from "components/Sidebar/Sidebar";
import PerfectScrollbar from "perfect-scrollbar";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import routes from "routes";

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
      <Sidebar {...props} routes={routes} />
      <div className="main-panel" ref={mainPanel}>
        <TopNavigation {...props} />
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
        </Switch>
        {/* <Footer fluid /> */}
      </div>
    </div>
  );
}

export default Dashboard;
