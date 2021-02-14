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
import Student from "layouts/Student.js";

import Header from "components/Headers/Header.js";

import { AuthContext } from "../../context/store";

import { useRouter } from "next/router";



const About = () => {
  
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
                      <h4 className="text-uppercase text-dark ls-1 mb-1">
                            Tricode Scholarships Portal is one-stop solution through which various services starting from student application, application receipt, processing, sanction and disbursal of various scholarships to Students are enabled. Tricode Scholarships Portal is taken as Mission Mode Project under National e-Governance Plan (NeGP)
                        </h4>
                        <hr/>
            
                              <h4 >  Vision</h4><h5>
                               Tricode Scholarships Portal is one-stop solution through which various services starting from student application, application receipt, processing, sanction and disbursal of various scholarships to Students are enabled.
                                This initiative aims at providing a Simplified, Mission-oriented, Accountable, Responsive & Transparent 'SMART' System for faster & effective disposal of Scholarships applications and delivery of funds directly into beneficiaries account without any leakages.

                                </h5> <br/> <h4>  Mission</h4><h5>
                                The Mission Mode Project (MMP) of Tricode Scholarships Portal under the Tricode e-Governance Plan aims at providing common electronic portal for implementing various Scholarships schemes launched by Union Government, State Government and Union Territories across the country.

                                </h5> <br/> <h4>   Objectives</h4><h5>
                                Ensure timely disbursement of Scholarships to studentsProvide a common portal for various Scholarships schemes of Central and State GovernmentsCreate a transparent database of scholarsAvoid duplication in processingHarmonisation of different Scholarships schemes & normsApplication of Direct Benefit Transfer
                              </h5>   <br/>
                               <h4>  Benefits</h4>
                               <h5>Simplified process for the students:</h5>
                                <h5> &nbsp; 1: All scholarships information available under one umbrella.</h5>
                                <h5>&nbsp;2: Single integrated application for all scholarships</h5>
                               <h5> Improved transparency :</h5>
                                 <h5>&nbsp;  1: System suggests the schemes for which a student is eligible.</h5>
                               <h5>&nbsp; 2: Duplicates can be reduced to the maximum extent</h5>
                               <h5> Helps in standardisation :</h5>
                               <h5> &nbsp;1: Master data for Institutions and courses at all India level .</h5>
                               <h5>&nbsp; 2: cholarships processing</h5>
                               <h5>  Serves as a decision support system (DSS) for Ministries and departments as up-to date information will be available on demand.
                                Comprehensive MIS System to facilitate monitoring every stage of Scholarships distribution i.e. from student registration to delivery of funds

                      </h5>
                      
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                <div class="row"> 
                 
                 </div>                   
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

About.layout = Student;

export default About;
