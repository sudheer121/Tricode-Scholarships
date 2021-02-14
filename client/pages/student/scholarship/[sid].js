import React, { useContext } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";

import { useRouter } from "next/router";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  ListGroup, 
  ListGroupItem,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Student from "layouts/Student.js";

import Header from "components/Headers/Header.js";

import { AuthContext } from "../../../context/store";


const scholarships = [
    {
      id: "1",
      name: "Scholarship 1",
      course: "B.E. - Info. Tech",
      university: "Mumbai",
      fees: 144434
    },
    {
      id: "2",
      name: "Scholarship 2",
      course: "B.E. - Comp. Sci.",
      university: "Mumbai",
      fees: 133232
    },
    {
      id: "3",
      name: "Scholarship 3",
      course: "B.E. - EXTC",
      university: "Mumbai",
      fees: 143223
    },
    {
      id: "4",
      name: "Scholarship 4",
      course: "B.E. - Production",
      university: "Mumbai",
      fees: 97000
    }
  ];


const Scholarship = () => {
  
  const router = useRouter();

  const auth = useContext(AuthContext);

  if (auth.role === "regulator") {
    router.push("../../regulator/dashboard");
  }


    const { sid } = router.query;

    const details = scholarships.find((curr) => curr.id === sid );

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Details
                      </h6>
                      <h2 className="mb-0">{details.name}</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <ListGroup>
                      <ListGroupItem>
                        <h4>Course: {details.course}</h4>
                        <h4>University: {details.university}</h4>
                        <h4>Fees: {details.fees}</h4>
                      </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

Scholarship.layout = Student;

export default Scholarship;
