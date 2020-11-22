/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <footer className="py-5">
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
      </>
    );
  }
}

export default Login;
