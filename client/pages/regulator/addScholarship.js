import React, { useContext } from "react";

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
// core components
import UserHeader from "components/Headers/UserHeader.js";
import Header from "components/Headers/Header.js";

import { AuthContext } from "../../context/store";

import { useRouter } from "next/router";

import Regulator from "layouts/Regulator";


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





const AddScholarship = () => {

  const router = useRouter();

  const auth = useContext(AuthContext);

  if (auth.role === "student") {
    router.push("student/dashboard");
  }

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--5" fluid>
          <Row>
            
            <Col className="order-xl-1">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">New Scholarship</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                <Formik
                    initialValues={{
                        title: "",
                        description: "",
                        type: "",
                        organisation_id: ""
                    }}
                    validationSchema={SignInSchema}
                    onSubmit={(values, actions) => {
                      console.log(values);
                      actions.resetForm();
                      alert("Submitted");

                    }}
                  >
                    {(props) => (
                    <>
                    <Row>
                        <Col lg="6">
                    <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Title
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-first-name"
                              placeholder="Title"
                              type="text"
                              name = "title"
                              tag={Field}
                            />
                    </FormGroup>
                    </Col>
                    </Row>
                      <hr className="my-4" />
                      <h6 className="heading-small text-muted mb-4">
                        Scholarship Details
                      </h6>


                      <FormGroup>
                        <label>Description</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="Details for the scholarship"
                          rows="4"
                          name = "description"
                          tag = {Field}
                          type="textarea"
                        />
                    </FormGroup>  


                      <hr className="my-4" />
                      <h6 className="heading-small text-muted mb-4">
                        Course Type
                      </h6>
                    <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-currentcourse"
                            >
                              Course Type
                            </label>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-bold-right" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Course Type"
                            type="text"
                            name="type"
                            tag={Field}
                          />
                        </InputGroup>
                    </FormGroup>
                    
                      

                    <div className="text-center">
                      <Button className="mt-4" color="primary" onClick={props.handleSubmit}>
                        Submit
                      </Button>
                    </div>
                  </>
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

AddScholarship.layout = Regulator;

export default AddScholarship;
