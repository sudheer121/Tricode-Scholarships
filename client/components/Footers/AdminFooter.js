/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
            <div className="copyright text-center text-muted">
              © {new Date().getFullYear()}{" "}
              <a
                className="font-weight-bold ml-1"
                href="#pablo"
                rel="noopener noreferrer"
                target="_blank"
              >
                Tricode Scholarships
              </a>
            </div>
          
      </footer>
    );
  }
}

export default Footer;
