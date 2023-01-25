import React from "react";
import { NavLink } from "reactstrap";

function Sidebar(props) {
  return (
    <div className="sidebar-links-list">
      {props?.formLinks?.form_headings?.map((links) => {
        return (
          <NavLink className="scroll-link" href={`#section${links.id}`}>
            {links.form_heading}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Sidebar;
