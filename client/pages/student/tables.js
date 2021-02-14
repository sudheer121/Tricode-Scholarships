import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
// reactstrap components
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Modal, ModalHeader, ModalBody, ModalFooter,
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
import Student from "layouts/Student.js";
// core components
import Header from "components/Headers/Header.js";

import { AuthContext } from "../../context/store";

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


const stats = {accepted:"#00dd00", pending:"red"};
const statsbg = {accepted:"#D8FFC8 ", pending:"white"};



const Tables = () => {

  const router = useRouter();

  const auth = useContext(AuthContext);

  if (auth.role === "regulator") {
    router.push("../regulator/dashboard");
  }


  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState([])
  const toggle = () => setModal(!modal);
  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  
  
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
                      {/* <th scope="col">Users</th>
                      <th scope="col">Completion</th> */}
                    </tr>
                  </thead>
                  <tbody>

                    {scholars.map((scholar, index) => {
                          return (
                          <tr key = {index} style = {{backgroundColor : statsbg[scholar.status] }}>
                            <td  style={{ cursor: "pointer" }} onClick={ toggle } >
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
                            
                                <Modal isOpen={modal} toggle={toggle} className="" external={externalCloseBtn}>
                                    {scholar.status == "accepted" 
                                    ?<ModalHeader>Application Under Process</ModalHeader>:<ModalHeader>Application accepted</ModalHeader>
                                    }  
                                  <ModalBody>
                                      <b>Your Application is under process.</b><br />
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </ModalBody>




                                  
                                  <ModalFooter>
                                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                                  </ModalFooter>
                                </Modal>
                            
                          </tr>
                    )})}
                  </tbody>
                </Table>
                <CardFooter className="py-2">
                  
                </CardFooter>
              </Card>

            </div>
          </Row>
          
        </Container>
      </>
    );
}

Tables.layout = Student;

export default Tables;
