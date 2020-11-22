import React, { useContext } from "react";
const jwt = require('jsonwebtoken');

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import Header from "components/Headers/Header.js";

import { AuthContext } from "../../context/store";

import { useRouter } from "next/router";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum"),

  passwordConfirmation: Yup.string()
    .required("Please confirm your Password")
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    
  phoneNumber: Yup.string()
    .matches(/(\d){10}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),

  AadhaarCard: Yup.mixed()
  .required(),

  aadhaarNumber: Yup.string()
  .matches(/(\d){12}\b/, 'Enter a valid Aadhaar number')
  .required('Aadhaar number is required'),

  familyIncome:Yup.string()
  .matches(/(\d)\b/, 'Enter a valid Aadhaar number')
  .required('Aadhaar number is required'),

});


class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) { return; }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) { return null; }

    if (loading) { return <p>loading...</p>; }

    return (<img src={thumb}
      alt={file.name}
      className="img-thumbnail mt-2"
      height={200}
      width={200} />);
  }
}





const Profile = () => {

  const router = useRouter();

  const auth = useContext(AuthContext);

  if (auth.role === "regulator") {
    router.push("../regulator/dashboard");
  }

  let decodedToken = jwt.decode(auth.token, { complete: true });
  const email = decodedToken.payload.payload.email;

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--5" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("assets/img/theme/avatar.png")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardBody className="pt-0 pt-md-6">
                  
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">

                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      Username
                      <span className="font-weight-light">, Age</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Location, Country
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Latest Profession
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Organization
                    </div>
                    <hr className="my-4" />
                    <p>
                      Something about yourself
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My account</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                <Formik
                    initialValues={{
                      email: email,
                      password : "",
                      passwordConfirmation: "",
                      firstName:"",
                      fatherName:"",
                      lastName:"",
                      motherName:"",
                      address:"",
                      city:"",
                      country:"",
                      postalCode:"",
                      currentCourse:"",
                      currentCollege:"",
                      latestMarks:"",
                      latestMarksheet:null,
                      appliedCourse:"",
                      aadhaarNumber:"",
                      AadhaarCard:"",
                      appliedCourseFees:"",
                      familyIncome:"",
                      aboutMe:"",


                    }}
                    // validationSchema={SignInSchema}
                    onSubmit={async (values, actions) => {
                      try {
                        const response = await fetch("http://localhost:7000/student", {
                          method: "POST",
                          body: JSON.stringify({
                            user_id : "1",
                            name : "Ethan",
                            father_name : "Vincent",
                            mother_name : "Anita",
                            last_name : "Palani",
                            mobile_num : "9967481995",
                            phone_number: "26782301",
                            college_name: "Fr. CRCE",
                            address: "Andheri",
                            city: "Mumbai",
                            country: "India",
                            postal_code: "400058",
                            current_course: "B.E. - I.T.",
                            latest_marks: "79",
                            yearly_family_income: "1000000",
                            aadhar_number: "400590390293",
                            applied_course: "Dummy",
                            applied_course_fee: "Random",
                            about_me: "I am an engineer"
                        }),
                          headers: {
                            'Content-Type': 'application/json',
                            'Authorization' : "Bearer " +auth.token
                          }
                        });
      
                        const responseData = await response.json();
                        actions.resetForm();
                        // if (responseData.success === 1) {
                        //   let decodedToken = jwt.decode(responseData.jwt, { complete: true });
                        //   const role = decodedToken.payload.payload.organisation_id === null ? "admin" : "regulator";
                        //   auth.login(responseData.jwt, decodedToken.expiresIn, role);
                        //   // console.log(auth.role);
                        //   if (role === "admin") {
                        //     router.push('../admin/dashboard');
                        //   }
                        //   else {
                        //     router.push('../regulator/dashboard');
                        //   }
                        // } else {
                        //   actions.setSubmitting(false);
                        //   actions.setErrors({ email: "Username or password is invalid", password: "Username or password is invalid" });
                        // }
                      } catch (err) {
                        console.log(err);
                      }
                    }}
                  >
                    {(props) => (
                    <Form onSubmit={props.handleSubmit}>
                    <Row>
                        <Col lg="6">
                    <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                              name = "firstName"
                              tag={Field}
                            />
                    </FormGroup>
                    <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-father-name"
                            >
                              Father's name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-father-name"
                              placeholder="Father name"
                              type="text"
                              name="fatherName"
                              tag={Field}
                            />
                    </FormGroup>
                    
                    </Col>
                    <Col lg="6">
                    <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                              name="lastName"
                              tag={Field}
                            />
                    </FormGroup>
                    
                    <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-mother-name"
                            >
                              Mother's name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-mother-name"
                              placeholder="Mother name"
                              type="text"
                              name="motherName"
                              tag={Field}
                            />
                    </FormGroup>
                    </Col>
                    </Row>
                      <hr className="my-4" />
                      <h6 className="heading-small text-muted mb-4">
                        Contact information
                      </h6>
                    <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Email
                        </label>    
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="email"
                            name="email"
                            tag={Field}
                            className={props.errors.password && props.touched.password ? 
                              "input-error" : null}
                            autoComplete="new-email"
                          />
                        </InputGroup>
                        {props.errors.email && props.touched.email && (
                          <span className="text-danger">{props.errors.email}</span>
                        )}
                    </FormGroup>
                    <FormGroup>
                      
                            <label
                              className="form-control-label"
                              htmlFor="input-mobile"
                            >
                              Phone Number
                            </label>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-bold-right" />
                                </InputGroupText>
                              </InputGroupAddon>
                            <Input
                              name = "phoneNumber"
                              id="input-mobile"
                              placeholder="Phone Number"
                              type="text"
                              tag={Field}
                              autoComplete="new-number"
                              />
                              </InputGroup>
                                  {props.errors.phoneNumber && props.touched.phoneNumber && (
                              <span className="text-danger">{props.errors.phoneNumber}</span>
                        )}
                     </FormGroup>
                    <div className="pl-lg">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-address"
                              placeholder="Home Address"
                              type="text"
                              name = "address"
                              tag={Field}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              City
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-city"
                              placeholder="City"
                              type="text"
                              name = "city"
                              tag={Field}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Country
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-country"
                              placeholder="Country"
                              type="text"
                              name="country"
                              tag={Field}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Postal code
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              placeholder="Postal code"
                              type="number"
                              name = "postalCode"
                              tag={Field}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>                   
                      <hr className="my-4" />
                      <h6 className="heading-small text-muted mb-4">
                        Course information
                      </h6>
                    <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-currentcourse"
                            >
                              Current Course
                            </label>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-bold-right" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Current Course"
                            type="text"
                            name="currentCourse"
                            tag={Field}
                          />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-currentcollege"
                            >
                              Current College
                            </label>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-bold-right" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Current College"
                            type="text"
                            name="currentCollege"
                            tag={Field}
                          />
                        </InputGroup>
                    </FormGroup>  
                    <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-latestMarks"
                            >
                              Latest Marks
                            </label>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-bold-right" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Latest Marks"
                            type="text"
                            name="latestMarks"
                            tag={Field}
                          />
                        </InputGroup>
                    </FormGroup>
                   
                    <FormGroup>
                            <label
                              className="form-control-label"
                            >
                             Latest Marksheet
                            </label>
                       
                        <InputGroup className="input-group-alternative">
                          
                                <Input
                                  
                                  type="file"
                                  name="latestMarksheet"
                                  label="Upload file"
                                  className=""
                                  onChange = {(event) => props.setFieldValue("latestMarksheet", event.target.files[0])  }

                                />      
                         
                        </InputGroup>
                        <Thumb file={props.values.latestMarksheet} />
                    </FormGroup> 

                    <hr className="my-4" />                
                    <h6 className="heading-small text-muted mb-4">
                      More information
                    </h6>

                    <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-appliedCourse"
                            >
                              Applied Course
                            </label>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-bold-right" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Applied Course"
                            type="text"
                            name="appliedCourse"
                            tag={Field}
                          />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-appliedCourseFees"
                            >
                              Applied Course Fees
                            </label>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-bold-right" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Applied Course Fees"
                            type="text"
                            name="appliedCourseFees"
                            tag={Field}
                          />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-familyIncome"
                            >
                              Family Income
                            </label>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-bold-right" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Family Income"
                            type="text"
                            name="familyIncome"
                            tag={Field}
                          />
                        </InputGroup>
                        {props.errors.familyIncome && props.touched.familyIncome && (
                        <span className="text-danger text-sm">{props.errors.familyIncome}</span>)}
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-mobile"
                      >
                        Aadhaar Number
                      </label>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-bold-right"  />
                          </InputGroupText>
                        </InputGroupAddon>
                      <Input
                        name = "aadhaarNumber"
                        id="input-aadhaarnumber"
                        placeholder="Aadhaar Number"
                        type="text"
                        tag={Field}
                        autoComplete="new-number"
                        />
                        </InputGroup>
                            {props.errors.aadhaarNumber && props.touched.aadhaarNumber && (
                        <span className="text-danger text-sm">{props.errors.aadhaarNumber}</span>
                  )}
               </FormGroup>
                    <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-aadhaarCard"
                            >
                              Aadhaar Card Upload
                            </label>
                        <InputGroup className="input-group-alternative">
                           
                           
                           <Input
                            type="file"
                            name="AadhaarCard"
                            label="Upload file"
                            onChange = {(event) => props.setFieldValue("AadhaarCard", event.target.files[0])  }
                          />
                        </InputGroup>
                        <Thumb file={props.values.AadhaarCard}/>
                    </FormGroup>


                    <FormGroup>
                        <label>About Me</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="A few words about you ..."
                          rows="4"
                          name = "aboutMe"
                          tag = {Field}
                          type="textarea"
                        />
                    </FormGroup>     

                    <div className="text-center">
                      <Button className="mt-4" color="primary" onClick={props.handleSubmit}>
                        Submit
                      </Button>
                    </div>
                  </Form>
                    )}
                  </Formik>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
}

Profile.layout = Admin;

export default Profile;
