import React, { useEffect, useState } from "react";
import "../../home/popular-movies/popularMovies.css"
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

const SimilarMovies = ({currentMovie}) => {
  const [similarMovies , setSimilarMovies] = useState([])

  const currentGenreIds = currentMovie?.genres.map(item => item.id)

  const trendingMovies = useSelector(state => state.trendingMovies.movies)
  const popularMovies = useSelector(state => state.popularMovies.movies)
  const popularSeries = useSelector(state => state.popularSeries.movies)
  const popularAnimations = useSelector(state => state.popularAnimations.animations)
  const allMovies = trendingMovies.concat(popularMovies , popularSeries , popularAnimations);

  

  useEffect(() => {
    const compairedMovies = allMovies?.filter((movie) => movie.genre_ids.some((genre) => currentGenreIds?.includes(genre)))

    setSimilarMovies(compairedMovies)

  },[currentMovie])

  return (
    <div className="similar-movies">
      <h3 className="popular-text text-white mb-5">
        you might also<span> like</span>
      </h3>

      <div className="d-flex align-items-center justify-content-center">
        <div className="arrow-series-left arrow-btn">
          <i className="ri-arrow-left-double-line"></i>
        </div>

        {similarMovies <= 0 ? (
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
            {similarMovies.map((item, index) => (
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

export default SimilarMovies;
