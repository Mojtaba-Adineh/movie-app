import React from "react";
import { baseImgUrl } from "../../api config/apiConfig";
import "../../components/home/popular-movies/popularMovies.css";
import { NavLink } from "react-router-dom";

const MovieCard = ({ item }) => {
    const rateStyle = () => {
        if (item.vote_average <= 3) {
          return { color: "red" };
        }
        if (item.vote_average > 3 && item.vote_average < 7) {
          return { color: "goldenrod" };
        }
        if (item.vote_average >= 7) {
          return { color: "green" };
        }
      };

  return (
    <NavLink to={`/movies/${item.id}`}>
      <div className="each-movie">
        <img src={baseImgUrl + item.poster_path} alt={item.title} />
        <div className="movie-card-rate">
          <p style={rateStyle()}>{item.vote_average.toFixed(1)}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default MovieCard;
