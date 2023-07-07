import React, { useEffect, useState } from "react";
import "../popular-movies/popularMovies.css";
import { useSelector } from "react-redux";
import { baseImgUrl } from "../../../api config/apiConfig";
import { NavLink } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation } from "swiper";
import MovieCard from "../../../common/movie-card/MovieCard";

const PopularAnimations = () => {
  const fetchedAnimations = useSelector(
    (state) => state.popularAnimations.animations
  );
  const loading = useSelector((state) => state.popularAnimations.loading);

  return (
    <div className="popular-animations">
      <h3 className="popular-text text-white mb-5">
        Popular <span>Animations</span>
      </h3>

      <div className="d-flex align-items-center justify-content-center">
        <div className="arrow-animation-left arrow-btn">
          <i className="ri-arrow-left-double-line"></i>
        </div>

        {loading || fetchedAnimations <= 0 ? (
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
              prevEl: ".arrow-animation-left",
              nextEl: ".arrow-animation-right",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation]}
            className="popular-slider"
          >
            {fetchedAnimations.map((item, index) => (
              <SwiperSlide key={index}>
                <MovieCard item={item}/>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="arrow-animation-right arrow-btn">
          <i className="ri-arrow-right-double-line"></i>
        </div>
      </div>
    </div>
  );
};

export default PopularAnimations;
