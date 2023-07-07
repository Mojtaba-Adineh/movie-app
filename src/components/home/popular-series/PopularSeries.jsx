import React, { useEffect, useState } from "react";
import "../popular-movies/popularMovies.css";
import { useSelector } from "react-redux";
import { baseImgUrl } from "../../../api config/apiConfig";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation } from "swiper";
import MovieCard from "../../../common/movie-card/MovieCard";

const PopularSeries = () => {
  const fetchedSeries = useSelector((state) => state.popularSeries.movies);
  const loading = useSelector((state) => state.popularSeries.loading);

  return (
    <div className="popular-series">
      <h3 className="popular-text text-white mb-5">
        Popular <span>Series</span>
      </h3>

      <div className="d-flex align-items-center justify-content-center">
        <div className="arrow-series-left arrow-btn">
          <i className="ri-arrow-left-double-line"></i>
        </div>

        {loading || fetchedSeries <= 0 ? (
          <div className="spinner-container">
            <div className="lds-dual-ring"></div>
          </div>
        ) : (
          <Swiper
            slidesPerView={5}
            spaceBetween={40}
            slidesPerGroupSkip={3}
            grabCursor={true}
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
              prevEl: ".arrow-series-left",
              nextEl: ".arrow-series-right",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation]}
            className="popular-slider"
          >
            {fetchedSeries.map((item, index) => (
              <SwiperSlide key={index}>
                <MovieCard item={item}/>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="arrow-series-right arrow-btn">
          <i className="ri-arrow-right-double-line"></i>
        </div>
      </div>
    </div>
  );
};

export default PopularSeries;
