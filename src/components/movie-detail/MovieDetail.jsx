import React, { useEffect, useState } from "react";
import "./movieDetail.css";

import Helmet from "./../../common/helmet/Helmet";
import { Container } from "reactstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMovies } from "../../features/trendingMoviesSlice";
import { apiKey, baseImgUrl } from "../../api config/apiConfig";
import axios from "axios";
import { baseUrl } from "../../api config/apiConfig";
import SimilarMovies from './similar-movies/SimilarMovies';

const MovieDetail = () => {
  const [currentMovie, setCurrentMovie] = useState();
  const { id } = useParams();

  // fetching the current movie by id
  useEffect(() => {
    fetchCurrentMovie();
  }, [id]);

  const fetchCurrentMovie = async () => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/movie/${id}?api_key=${apiKey}`
      );
      setCurrentMovie(data);
    } catch (error) {
      fetchCurrentTvSeries(); //so if we dont find the movie by id its current is among series
    }
  };

  // because we failed in finding the movie we try to search the id among series 
  const fetchCurrentTvSeries = async () => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/tv/${id}?api_key=${apiKey}`
      );
      setCurrentMovie(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
      window.scrollTo(0, 0);
  },[currentMovie])

  const backgroundStyle = {
    background: currentMovie
      ? `url(${baseImgUrl + currentMovie.backdrop_path})`
      : "#2C394B",
  };

  return (
    <Helmet title="movie-detail">
      <div style={backgroundStyle} className="movie-detail">
        <section>
          {!currentMovie ? (
            <div className="spinner-container">
              <div className="lds-dual-ring"></div>
            </div>
          ) : (
            <Container className="main-container d-flex gap-5">
              <div className="img-container">
                <img src={baseImgUrl + currentMovie?.poster_path} alt="" />
              </div>
              <div className="d-flex text-white flex-column gap-5">
                <div className="title-and-vote d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-column">
                    <h2 className="movie-detail-title">
                      {currentMovie?.title
                        ? currentMovie?.title
                        : currentMovie?.name}
                    </h2>
                    <p>{currentMovie?.release_date?.slice(0,4)}</p>
                  </div>
                  <div>
                    <p className="vote-number"><span>{currentMovie.vote_average.toFixed(1)}</span> /10</p>
                    <div className="d-flex gap-2 movie-detail-imdb flex-column">
                      <p className="mb-0  ">IMDB</p><span>{currentMovie.vote_count} votes</span>
                    </div>
                  </div>
                </div>
                <div className="movie-info">
                  <p>
                    Genre :
                    {currentMovie.genres.map((genre , index) => (
                      <span key={index}> {genre.name}</span>
                    ))}
                  </p>
                  <p>
                    Language :
                    <span> {currentMovie.original_language}</span>
                  </p>
                  <p>
                    Adult :
                    <span> {currentMovie.adult ? "yes" : "no"}</span>
                  </p>
                  <p>
                    Runtime :
                    <span> {`${currentMovie.runtime} minutes`}</span>
                  </p>
                </div>
                <p className="overView">
                  OverView :
                  {currentMovie.overview ? <span>{currentMovie.overview}</span> : <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequuntur sed ut nostrum ab odit fuga porro minima quisquam ipsa, iusto nihil officiis! Rem, error temporibus labore cupiditate earum eligendi?</span>}
                </p>
              </div>
            </Container>
          )}
        </section>
      </div>

      <section className="similarMovies-section">
        <Container fluid>
          <SimilarMovies currentMovie={currentMovie}/>
        </Container>
      </section>
    </Helmet>
  );
};

export default MovieDetail;
