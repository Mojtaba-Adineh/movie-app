import React from "react";
import "./login.css";
import Helmet from "./../../common/helmet/Helmet";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import { NavLink } from "react-router-dom";
import { Container , Row } from "reactstrap";
import { loginSchema } from './loginSchema';

const Login = () => {
  const onSubmit = async (values , actions) => {
    actions.resetForm()
    await new Promise((resolve) => setTimeout(resolve ,  1500))
    window.location = "/home"
  }

  return (
    <Helmet title="login">
      <div className="login">
        <div className="login-overlap">
          <Container className="h-75 d-flex align-items-center">
            <Row className="d-flex px-5">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                enableReinitialize
                validationSchema={loginSchema}
                onSubmit={onSubmit}
              >
                {(props) => (
                  <Form>
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
                    <button disabled={props.isSubmitting} className="login-submit" type="submit">Submit</button>
                  </Form>
                )}
              </Formik>
              <div className="login-title">
                <p>you don't have an account?</p>
                <NavLink to={"/register"}>Sign up here</NavLink>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </Helmet>
  );
};

export default Login;
