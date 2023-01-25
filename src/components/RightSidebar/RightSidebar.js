import React from "react";
import { Link as ScrollLink } from "react-scroll";

const RightSidebar = ({ cardId, urlTitle }) => {
  return (
    <>
      <div className="content right-sidebar">
        <ScrollLink
          underline="none"
          style={{ margin: "0.7rem" }}
          to={cardId}
          smooth={true}
          activeClass="active"
          className="nav-link"
        >
          {urlTitle}
        </ScrollLink>
      </div>
    </>
  );
};

export default RightSidebar;
