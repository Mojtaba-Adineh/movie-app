import React from "react";
import "./contact.css";
import Helmet from "./../../common/helmet/Helmet";
import { Col, Container, Row } from "reactstrap";

const Contact = () => {
  return (
    <Helmet title="Contact">
      <div className="contact">
        <Container>
          <Row>
            <Col
              className="pt-5 d-flex align-items-center justify-content-center"
              lg="12"
              md="12"
              sm="12"
            >
              <div className="box">
                <div className="content">
                  <h2 className="text-white ">Contact us in 2 ways!</h2>
                </div>
              </div>
            </Col>

            <Col className="d-flex justify-content-center mt-5 pt-4" lg="6" md="6" sm="12">
              <div className="emailArea d-flex flex-column w-75 align-items-center">
                <h3>Via Email</h3>
                <input type="email" placeholder="Enter your email" />
                <textarea
                  placeholder="tell us! we hear you"
                  cols="30"
                  rows="10"
                ></textarea>
                <button type="submit">
                  Send <i class="ri-send-plane-fill"></i>
                </button>
              </div>
            </Col>

            <Col className="d-flex justify-content-center mt-5 pt-4" lg="6" md="6" sm="12">
              <div className="socialMedia d-flex flex-column w-75 align-items-center">
                <h3>Via social media</h3>
                
                    <Container className="d-flex align-items-center justify-content-center">
                      <Row className="w-50">
                          <Col className="social-cols" lg='6' md='6' sm='6'>
                            <a href="https://www.instagram.com/mojtaba_adn">
                              <i class="ri-instagram-line"></i>
                            </a>
                          </Col>
                          <Col className="social-cols" lg='6' md='6' sm='6'>
                            <a href="https://t.me/mojiwxa">
                              <i class="ri-telegram-line"></i>
                            </a>
                          </Col>
                          <Col className="social-cols" lg='6' md='6' sm='6'>
                            <a href="https://github.com/Mojtaba-Adineh">
                              <i class="ri-github-line"></i>
                            </a>
                          </Col>
                          <Col className="social-cols" lg='6' md='6' sm='6'>
                            <a href="mailto:codewithmoji@gmail.com">
                              <i class="ri-mail-line"></i>
                            </a>
                          </Col>
                      </Row>
                    </Container>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Helmet>
  );
};

export default Contact;
