import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay  } from "swiper";

import "./movieSlider.css";

import { useSelector } from "react-redux";
import { baseImgUrl } from "../../../api config/apiConfig";

import { NavLink } from 'react-router-dom';

const MovieSlider = () => {

  const fetchedMovies = useSelector((state) => state.trendingMovies.movies);
  const loading = useSelector(state => state.trendingMovies.loading)

  return (
    loading || fetchedMovies <= 0 ? (
      <div className="spinner-container">
        <div className="lds-dual-ring"></div>
      </div> 
    ) : (
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          pauseOnMouseEnter : true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        { fetchedMovies.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <NavLink className={'text-black'} to={`/movies/${item.id}`}>
                <div className="slide-content">
                  <div className="rating">
                    <h5>{item.vote_average.toFixed(1)}<span>/10</span></h5>
                    <div className="imdb">
                      <h2>IMDB</h2>
                    </div>
                  </div>
                  <img
                    className="poster-img"
                    src={baseImgUrl + item.backdrop_path}
                    alt={item.title}
                  />
                  <div className="dark-overlay"></div>
                  <div className="text-overlay">
                    <h2>{item.title}</h2>
                    <p>{item.release_date.slice(0 , 4)}</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
        ))}
      </Swiper>
    )
  );
};

export default MovieSlider;
