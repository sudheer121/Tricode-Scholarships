import React, { useContext } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";

import { useRouter } from "next/router";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardFooter ,
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
import Regulator from "../../../layouts/Regulator";

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

  

const applicants = [
  {
      id: "1",
      name : "Alice Bob",
      title: "Scholarship 3",
      amount: 15000.00,
      status: "pending",
      key: "1"
  },
  {
      id: "2",
      name : "Alice Bob",
      title: "Scholarship 2",
      amount: 1000.00,
      status: "pending",
      key: "2"
  },
  {
      id: "3",
      name : "Alice Bob",
      title: "Scholarship 3",
      amount: 10000.00,
      status: "accepted",
      key: "3"
  },
  {
      id: "4",
      name : "Alice Bob",
      title: "Scholarship 3",
      amount: 15000.00,
      status: "pending",
      key: "4"
  },
  {
      id: "5",
      name : "Alice Bob",
      title: "Scholarship 3",
      amount: 1000.00,
      status: "pending",
      key: "5"
  },
  {
      id: "6",
      name : "Alice Bob",
      title: "Scholarship 3",
      amount: 10000.00,
      status: "redeemed",
      key: "6"
  },
  {
      id: "7",
      name : "Alice Bob",
      title: "Scholarship 4",
      amount: 9000.00,
      status: "pending",
      key: "7"
  }
];

const stats = {accepted:"#FFF300", pending:"red", redeemed: "#00ff00"};



const Scholarship = () => {
  
    const router = useRouter();

  const auth = useContext(AuthContext);

  if (auth.role === "admin") {
    router.push("admin/dashboard");
  }

    const { applicantlist } = router.query;

    const details = scholarships.find((curr) => curr.id === applicantlist );


    

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
        <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Application Status</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Scholarship</th>
                      <th scope="col" className = "text-right">Amount</th>
                      <th scope="col" className=" text-center">Status</th>
                      <th scope = "col"  className = "text-center">Applicants</th>
                      {/* <th scope="col">Users</th>
                      <th scope="col">Completion</th> */}
                    </tr>
                  </thead>
                  <tbody>

                    {
                    
                    applicants.filter(function(applicant){
                      if(applicant.title == details.name){
                        return applicant;
                      }})
                    .map((user, index) => {
                          return (
                          <tr key = {index}>
                            <td  >
                                  <span className="mb-0  mr-8" >
                                    {user.name}
                                  </span>
                            </td>
                            <td className = "text-right"> {user.amount}</td>
                            <td className=" text-center">
                                <Badge color="" className="badge-dot mr-4">
                                    <i style = {{backgroundColor: stats[user.status]  }} />    
                                </Badge>{user.status}              
                            </td>
                            <td className=" text-center">
                                

                              {user.status == "pending"
                                ? <Button className = "btn btn-sm bg-primary">Accept</Button>
                                : <> {user.status == "redeemed"
                                ? <Button className = "btn btn-sm bg-success">Pay Now</Button>
                                :<Button className = "btn btn-sm bg-disabled" disabled = "true" >Waiting</Button>
                          }</>
                            } 
                              
                            </td>
                          </tr>
                    )})}
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  
                </CardFooter>
              </Card>

            </div>
          </Row>
          
        </Container>
      </>
    );
  }

Scholarship.layout = Regulator;

export default Scholarship;
