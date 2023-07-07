import React, { useEffect, useRef, useState } from "react";
import "./popularMovies.css";
import { useSelector } from "react-redux";
import { baseImgUrl } from "../../../api config/apiConfig";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation } from "swiper";
import { NavLink } from "react-router-dom";
import MovieCard from "../../../common/movie-card/MovieCard";

const PopularMovies = () => {
  const fetchedMovies = useSelector((state) => state.popularMovies.movies);
  const loading = useSelector((state) => state.popularMovies.loading);

  return (
    <div className="popular-movies">
      <h3 className="popular-text text-white mb-5">
        Popular <span>Movies</span>
      </h3>

      <div className="d-flex align-items-center justify-content-center">
        <div className="arrow-movies-left arrow-btn">
          <i className="ri-arrow-left-double-line"></i>
        </div>

        {loading || fetchedMovies.length <= 0 ? (
          <div className="spinner-container">
            <div className="lds-dual-ring"></div>
          </div>
        ) : (
          <Swiper
            slidesPerView={5}
            spaceBetween={40}
            slidesPerGroupSkip={3}
            keyboard={{
              enabled: true,
            }}
            // breakpoints={{
            //   769: {
            //     slidesPerView: 6,
            //     slidesPerGroup: 3,
            //   },
            // }}
            scrollbar={true}
            navigation={{
              prevEl: ".arrow-movies-left",
              nextEl: ".arrow-movies-right",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation]}
            className="popular-slider"
          >
            {fetchedMovies.map((item, index) => (
              <SwiperSlide key={index}>
                <MovieCard item={item}/>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="arrow-movies-right arrow-btn">
          <i className="ri-arrow-right-double-line"></i>
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
