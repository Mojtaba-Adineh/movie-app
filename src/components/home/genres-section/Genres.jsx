import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./genres.css";
import { NavLink } from "react-router-dom";

const Genres = () => {
  const genres = [
    { genreName: "comedy", id: 35 },
    { genreName: "action", id: 28 },
    { genreName: "horror", id: 27 },
    { genreName: "mystery", id: 9648 },
    { genreName: "romance", id: 10749 },
  ];

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center px-5"
    >
      <Row className="w-75 d-flex align-items-center justify-content-center px-md-5">
        <Col
          className="d-flex align-items-center justify-content-center mb-5"
          lg="12"
          md="12"
          sm="12"
        >
          <h2 className="genre-title mb-5">
            Explore based on <span>Genres!</span>
          </h2>
        </Col>

        {genres.map((genre, index) => (
          <Col
            key={index}
            className="d-flex align-items-center justify-content-center mb-5"
            lg="4"
            md="4"
            sm="4"
            xs="6"
          >
            <div className="each-genre">
              <NavLink to={`/movies/genres/${genre.id}`}>
                <h4 className="genre-text">{genre.genreName}</h4>
              </NavLink>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Genres;
