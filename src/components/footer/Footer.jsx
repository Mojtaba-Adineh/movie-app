import React from "react";
import "./footer.css";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    {
      title: "Trending Movies",
      path: "trending",
    },
    {
      title: "Popular Movies",
      path: "popular-movies",
    },
    {
      title: "Popular Series",
      path: "popular-series",
    },
    {
      title: "Popular Animations",
      path: "popular-animations",
    },
    {
      title: "Genres",
      path: "genres",
    },
  ];

  return (
    <section className="footer">
      <Container>
        <Row className="pb-5">
          <Col lg="6" md="6">
            <ul className="d-flex flex-wrap align-items-center justify-content-center gap-3">
              {footerLinks.map((item, index) => (
                <li className="mb-2" key={index}>
                  <a className='footer-link' href={`#${item.path}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg="6" md="6">
          <div className="footer-signUp d-flex align-items-center justify-content-center flex-column gap-2">
            <h4>Sign up to get more access!</h4>
            <NavLink to='/login'>
                <button className="footer-signUp-btn">
                  Hit
                  <span>
                    <i className="ri-login-box-line"></i>
                  </span>
                </button>
            </NavLink>
          </div></Col>
        </Row>

        <Row className="pt-4 pb-3 border-1 border-top">
          <Col lg="6" md="6">
            <p className="rights-text">This website made by Mojtaba Adineh , All rights reserved</p>
          </Col>

          <Col lg="6" md="6">
            <ul className="social-media d-flex align-items-center justify-content-center gap-4">
                <li><NavLink to='https://www.instagram.com/mojtaba_adn'><i className="ri-instagram-line"></i></NavLink></li>
                <li><NavLink to='https://t.me/mojiwxa'><i className="ri-telegram-line"></i></NavLink></li>
                <li><NavLink to='https://github.com/Mojtaba-Adineh'><i className="ri-github-fill"></i></NavLink></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
