import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo.svg";

var ps;

function Sidebar(props) {
  const sidebar = React.useRef();
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator?.userAgentData?.platform?.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator?.userAgentData?.platform?.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div
      className="sidebar"
      id="#left-sidebar"
      // data-color={props.bgColor}
      // data-active-color={props.activeColor}
    >
      <div className="logo">
        <a
          href="https://www.creative-tim.com"
          className="simple-text logo-mini"
        >
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </a>
        <a
          href="https://www.creative-tim.com"
          className="simple-text logo-normal"
        >
          FORMITTY
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {/* className={activeRoute("/dashboard")} */}
          <li>
            <NavLink
              to="/"
              className="nav-link"
              // activeClassName="active"
            >
              <i class="fa-solid fa-gauge"></i>
              <p>Dashboard</p>
            </NavLink>
          </li>
          {/* className={activeRoute("/reports")} */}
          <li>
            <NavLink
              to="/reports"
              className="nav-link"
              // activeClassName="active"
            >
              <i className="fa-sharp fa-solid fa-newspaper"></i>
              <p>Reports</p>
            </NavLink>
          </li>
          {/* className={activeRoute("/community")} */}
          <li>
            <NavLink
              to="/community"
              className="nav-link"
              // activeClassName="active"
            >
              <i className="fa-solid fa-users"></i>
              <p>Community</p>
            </NavLink>
          </li>
          {/* className={activeRoute("/assistive-technologies")} */}
          <li>
            <NavLink
              to="/assistive-technologies"
              className="nav-link"
              // activeClassName="active"
            >
              <i className="fa-solid fa-microchip"></i>
              <p>Assistive Technologies</p>
            </NavLink>
          </li>
          {/* {props.routes.map((prop, key) => {
            return (
              <li
                className={
                  activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                }
                key={key}
              >
                <NavLink
                  to={prop.layout + prop.path}
                  className="nav-link"
                  // activeClassName="active"
                >
                  <i className={prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          })} */}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
