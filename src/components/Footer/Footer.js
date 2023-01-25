import React from "react";
import { Container, Row } from "reactstrap";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer
      className={
        "footer bg-white fixed-bottom" +
        (props.default ? " footer-default" : "")
      }
      style={{ left: "280px" }}
    >
      <Container fluid={props.fluid ? true : false}>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="/" target="_blank">
                  Accrual Hub
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Forum
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <div className="copyright">
              &copy; {1900 + new Date().getYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Accrual Hub
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
