import React from "react";
import "../login/login.css";
import Helmet from "./../../common/helmet/Helmet";
import { Formik, Form } from "formik";
import CustomInput from "../login/CustomInput";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { registerSchema } from "./registerSchema";

const Register = () => {
  const onSubmit = async (values, actions) => {
    actions.resetForm();
    await new Promise((resolve) => setTimeout(resolve, 1500));
    window.location = "/home";
  };

  return (
    <Helmet title="login">
      <div className="login">
        <div className="login-overlap">
          <Container className="h-75 d-flex align-items-center">
            <Row className="d-flex px-5">
              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                enableReinitialize
                validationSchema={registerSchema}
                onSubmit={onSubmit}
              >
                {(props) => (
                  <Form>
                    <CustomInput
                      value={props.values.email}
                      name="username"
                      placeholder="Username"
                      id="username"
                      type="text"
                    />
                    <CustomInput
                      value={props.values.email}
                      name="email"
                      placeholder="Email"
                      id="email"
                      type="email"
                    />
                    <CustomInput
                      value={props.values.password}
                      name="password"
                      placeholder="Password"
                      id="password"
                      type="password"
                    />
                    <CustomInput
                      value={props.values.password}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      id="confirmPassword"
                      type="password"
                    />
                    <button
                      disabled={props.isSubmitting}
                      className="login-submit"
                      type="submit"
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
              <div className="login-title">
                <p>already registered?</p>
                <NavLink to={"/login"}>Login here</NavLink>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </Helmet>
  );
};

export default Register;
