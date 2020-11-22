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

import Header from "components/Headers/Header.js";

import { useRouter } from "next/router";
import Regulator from "layouts/Regulator.js";
import { AuthContext } from "../../context/store";

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

  console.log(auth.role);

  if (auth.role === "admin") {
    router.push("admin/dashboard");
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
                      <h2 className="mb-0">Your Scholarships</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                <div class="row"> 
                  {scholarships.map(curr => (
                    <div class="col-sm-6">
                      <Card 
                          onClick={() => router.push(`scholarship/${curr.id}`)} 
                          className = "shadow my-2 py-4 px-4 " 
                          style = {{backgroundColor:'#89CFE8 ' }}
                           >
                        <CardTitle tag="h3"  style={{ cursor: "pointer" , color:'#000000'}}>{curr.name}</CardTitle>
                        <CardText style = {cardtext}>Course: {curr.course}</CardText>
                        <CardText style = {cardtext}>University: {curr.university}</CardText>
                        <CardText style = {cardtext}>Fees: {curr.fees}</CardText>
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


  const cardtext = {
    color: '#000000',
    fontFamily : 'Open Sans'
  };

Dashboard.layout = Regulator;



export default Dashboard;
