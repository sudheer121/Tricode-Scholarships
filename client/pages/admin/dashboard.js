import React, { useContext } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
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
import Admin from "layouts/Admin.js";

import Header from "components/Headers/Header.js";

import { AuthContext } from "../../context/store";

import { useRouter } from "next/router";

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


const Dashboard = () => {
  
  const router = useRouter();

  const auth = useContext(AuthContext);

  if (auth.role === "regulator") {
    router.push("../regulator/dashboard");
  }

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
                        Explore
                      </h6>
                      <h2 className="mb-0">Scholarships</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                <div class="row"> 
                  {scholarships.map(curr => (
                    <div class="col-sm-6">                    
                      <Card onClick={() => router.push(`scholarship/${curr.id}`)} className = "my-2 py-4 px-4" style = {{backgroundColor:'#99CFE8 ' }} >
                        <CardTitle tag="h4"  style={{ cursor: "pointer" }}>{curr.name}</CardTitle>
                        <CardText>Course: {curr.course}</CardText>
                        <CardText>University: {curr.university}</CardText>
                        <CardText>Fees: {curr.fees}</CardText>
                      </Card>
                    </div>  

                  ))}
                 </div>                   
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

Dashboard.layout = Admin;

export default Dashboard;
