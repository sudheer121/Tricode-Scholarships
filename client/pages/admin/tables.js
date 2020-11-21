import React from "react";
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
import Admin from "layouts/Admin.js";
// core components
import Header from "components/Headers/Header.js";


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

const Tables = () => {

  const router = useRouter();
  
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
                      <th scope = "col">Options</th>
                      {/* <th scope="col">Users</th>
                      <th scope="col">Completion</th> */}
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>

                    {scholars.map((scholar, index) => {
                          return (
                          <tr key = {index}>
                            <td>
                              <Media>
                                  <span className="mb-0 text-lg mr-8" style={{ cursor: "pointer" }} onClick={() => router.push(`scholarship/${scholar.id}`)}>
                                    {scholar.title}
                                  </span>
                              </Media>
                            </td>
                            <td className = "text-right"> {scholar.amount}</td>
                            <td className=" text-center">
                              <Badge color="" className="badge-dot mr-4">
                                <i className="bg-warning" />    
                              </Badge>                      
                              {scholar.status}              
                            </td>
                            <td className="">
                                              <UncontrolledDropdown>
                                                <DropdownToggle
                                                  className="btn-icon-only text-light"
                                                  href="#pablo"
                                                  role="button"
                                                  size="sm"
                                                  color=""
                                                  onClick={(e) => e.preventDefault()}
                                                >
                                                  <i className="fas fa-ellipsis-v" />
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                  <DropdownItem
                                                    href="#pablo"
                                                    className = "disabled"
                                                    onClick={(e) => e.preventDefault()}
                                                  >
                                                    Redeem 
                                                  </DropdownItem>
                                                  <DropdownItem
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                  >
                                                   Delete
                                                  </DropdownItem>
                                                  
                                                </DropdownMenu>
                                              </UncontrolledDropdown>
                            </td>
                          </tr>
                    )})}
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>

            </div>
          </Row>
          
        </Container>
      </>
    );
}

Tables.layout = Admin;

export default Tables;
