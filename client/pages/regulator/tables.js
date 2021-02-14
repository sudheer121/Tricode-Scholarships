import React, { useContext } from "react";
import { useRouter } from "next/router";
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// layout for this page
// core components
import Header from "components/Headers/Header.js";
import { AuthContext } from "../../context/store";
import Regulator from "../../layouts/Regulator";


const scholars = [
  {
      id: "1",
      title: "Scholarship #1",
      amount: 15000.00,
      status: "pending",
      key: "1"
  },
  {
      id: "2",
      title: "Scholarship #2",
      amount: 1000.00,
      status: "pending",
      key: "2"
  },
  {
      id: "3",
      title: "Scholarship #3",
      amount: 10000.00,
      status: "accepted",
      key: "3"
  },
  {
      id: "4",
      title: "Scholarship #4",
      amount: 9000.00,
      status: "pending",
      key: "4"
  }
];



const applicants = [
  {
      id: "1",
      name : "Alice Bob",
      title: "Scholarship #1",
      amount: 15000.00,
      status: "pending",
      key: "1"
  },
  {
      id: "2",
      name : "Alice Bob",
      title: "Scholarship #2",
      amount: 1000.00,
      status: "pending",
      key: "2"
  },
  {
      id: "3",
      name : "Alice Bob",
      title: "Scholarship #3",
      amount: 10000.00,
      status: "accepted",
      key: "3"
  },
  {
      id: "4",
      name : "Alice Bob",
      title: "Scholarship #1",
      amount: 15000.00,
      status: "pending",
      key: "4"
  },
  {
      id: "5",
      name : "Alice Bob",
      title: "Scholarship #3",
      amount: 1000.00,
      status: "pending",
      key: "5"
  },
  {
      id: "6",
      name : "Alice Bob",
      title: "Scholarship #3",
      amount: 10000.00,
      status: "accepted",
      key: "6"
  },
  {
      id: "7",
      name : "Alice Bob",
      title: "Scholarship #4",
      amount: 9000.00,
      status: "pending",
      key: "7"
  }
];

const stats = {accepted:"#00dd00", pending:"red"};

const Tables = () => {

  const router = useRouter();

  const auth = useContext(AuthContext);

  if (auth.role === "student") {
    router.push("student/dashboard");
  }

  const countType =  (type)=> {
    const countTypes = applicants.filter(function(applicant){
      if(applicant.title == type){
        return applicant;
      }
    });
    return countTypes.length;
  }
  
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
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
                      <th scope = "col">Applicants</th>
                      {/* <th scope="col">Users</th>
                      <th scope="col">Completion</th> */}
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>

                    {scholars.map((scholar, index) => {
                          return (
                          <tr key = {index}>
                            <td style={{ cursor: "pointer" }} onClick={() => router.push(`applicationstatus/${scholar.id}`)}>
                              <Media>
                                  <span className="mb-0  mr-8" >
                                    {scholar.title}
                                  </span>
                              </Media>
                            </td>
                            <td className = "text-right"> {scholar.amount}</td>
                            <td className=" text-center">
                                <Badge color="" className="badge-dot mr-4">
                                    <i style = {{backgroundColor: stats[scholar.status]  }} />    
                                </Badge>                       
                              {scholar.status}              
                            </td>
                            <td className="">
                                {countType(scholar.title)} 



                              
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

Tables.layout = Regulator;

export default Tables;
