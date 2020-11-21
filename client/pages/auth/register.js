import React from "react";

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";
import { useRouter } from "next/router";


const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum"),

  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});


const Register = () => {

  const router = useRouter();
    
  return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            {/* <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Sign up with</small>
              </div>
              <div className="text-center">
                <Button
                  className="btn-neutral btn-icon mr-4"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/github.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader> */}
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign up with credentials</small>
              </div>
              <Formik
                initialValues={{
                  email: "",
                  password : "",
                  passwordConfirmation: ""
                }}
                validationSchema={SignInSchema}
                onSubmit={async (values, actions) => {
                  try {
                    const response = await fetch("http://localhost:7000/register", {
                      method: "POST",
                      body: JSON.stringify({
                        email: values.email,
                        password: values.password
                      }),
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    });

                    const responseData = await response.json();
                    if (response.status === 200) {
                      router.push('admin/profile');
                    } else {
                      actions.setSubmitting(false);
                      actions.setErrors({ email: "Some error occurred, Please try again.", password: "Some error occurred, Please try again.", passwordConfirmation: "Some error occurred, Please try again." });
                    }
                  } catch (err) {
                    console.log(err);
                  }
                }}
              >
                {(props) => (
                <>
                  <FormGroup>
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
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      name="password"
                      tag={Field}
                      className={props.errors.password && props.touched.password ? 
                        "input-error" : null}
                      autoComplete="new-password"
                    />
                  </InputGroup>
                  {props.errors.password && props.touched.password && (
                    <span className="text-danger">{props.errors.password}</span>
                  )}
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      name="passwordConfirmation"
                      tag={Field}
                      autoComplete="new-password"
                    />
                  </InputGroup>
                  {props.errors.passwordConfirmation && props.touched.passwordConfirmation && (
                    <span className="text-danger">{props.errors.passwordConfirmation}</span>
                  )}
                </FormGroup>
                {/* <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div> */}
                {/* <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row> */}
                <div className="text-center">
                  <Button className="mt-4" color="primary" onClick={props.handleSubmit}>
                    Create account
                  </Button>
                </div>
              </>
                )}
              </Formik>
            </CardBody>
          </Card>
          <div className="mt-3">
          <a
              className="text-light mt-3"
              href="#pablo"
              onClick={(e) => { e.preventDefault(); router.push('login'); } }
            >
              <small>Sign in</small>
            </a>
            </div>
        </Col>
      </>
    );
  }

Register.layout = Auth;

export default Register;
