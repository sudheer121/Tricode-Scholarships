import React from "react";
import { useRouter } from "next/router";
// reactstrap components
import { Container } from "reactstrap";
// core components
import StudentNavbar from "components/Navbars/StudentNavbar.js";
import StudentFooter from "components/Footers/StudentFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "student-routes.js";

function Student(props) {
  // used for checking current route
  const router = useRouter();
  let mainContentRef = React.createRef();
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, []);
  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (router.route.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/student/index",
          imgSrc: require("assets/img/brand/nextjs_argon_black.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContentRef}>
        <StudentNavbar {...props} brandText={getBrandText()} />
        {props.children}
        <Container fluid>
          <StudentFooter />
        </Container>
      </div>
    </>
  );
}

export default Student;
