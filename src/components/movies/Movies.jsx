//note that the dirtiness and boilerplates of this file is because of the limits of TMDB api
//with a optimized backend/database would be much nicer and cleaner

import React, { useEffect, useState, useRef } from "react";
import "./movies.css";
import Helmet from "./../../common/helmet/Helmet";
import { Container, Row } from "reactstrap";
import { Col } from "reactstrap";
import { useSelector } from "react-redux";
import { baseImgUrl } from "./../../api config/apiConfig";
import { NavLink, useParams } from "react-router-dom";
import _ from "lodash";
import ReactPaginate from "react-paginate";

const Movies = () => {
  const [allMovies, setAllMovies] = useState();
  const [filteredByType, setFilteredByType] = useState([]);
  const [filteredByGenre, setFilteredByGenre] = useState([]);
  const [additionalFilter, setAdditionalFilter] = useState("noFilter");
  //movies we got from select elements filters
  const [finalFilteredMovies, setFinalFilteredMovies] = useState([]);
  //movies we got from searchBox
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  //getting all movies
  const trendingMovies = useSelector((state) => state.trendingMovies.movies);
  const popularMovies = useSelector((state) => state.popularMovies.movies);
  const popularSeries = useSelector((state) => state.popularSeries.movies);
  const popularAnimations = useSelector(
    (state) => state.popularAnimations.animations
  );

  //setting  all movies in state
  useEffect(() => {
    const tempAllMovies = trendingMovies.concat(
      popularMovies,
      popularSeries,
      popularAnimations
    );
    setAllMovies(tempAllMovies);
  }, [trendingMovies, popularMovies, popularSeries, popularAnimations]);

  //populate the initial value of filter movies in case there is no filter we show all movies anyway
  useEffect(() => {
    setFilteredByType(allMovies);
    setFilteredByGenre(allMovies);
  }, [allMovies]);

  // merge the filters and set the final movie array to show
  useEffect(() => {
    const merged = filteredByType?.filter((movie1) =>
      filteredByGenre.some((movie2) => movie1.id === movie2.id)
    );

    switch (additionalFilter) {
      case "top-reted":
        {
          const filteredByRate = _.orderBy(
            merged,
            [(movie) => parseFloat(movie.vote_average.toFixed(1))],
            ["desc"]
          );
          setFinalFilteredMovies(filteredByRate);
        }
        break;
      case "newest":
        {
          const newestMovies = _.orderBy(
            merged,
            [(o) => new Date(o.release_date)],
            ["desc"]
          );
          setFinalFilteredMovies(newestMovies);
        }
        break;
      case "oldest":
        {
          const oldestMovies = _.orderBy(
            merged,
            [(o) => new Date(o.release_date)],
            ["asc"]
          );
          setFinalFilteredMovies(oldestMovies);
        }
        break;
      default:
        setFinalFilteredMovies(merged);
        break;
    }
  }, [filteredByType, filteredByGenre, additionalFilter]);

  //setting the filters in state to merge them later
  const handleFilter = (e) => {
    const { name, value } = e.target;

    if (name === "movieType") {
      switch (value) {
        case "movies":
          {
            setFilteredByType(popularMovies.concat(trendingMovies));
            setPageNumber(0);
          }
          break;
        case "animations":
          {
            setFilteredByType(popularAnimations);
            setPageNumber(0);
          }
          break;
        case "series":
          {
            setFilteredByType(popularSeries);
            setPageNumber(0);
          }
          break;

        default:
          setFilteredByType(allMovies);
          setPageNumber(0);
          break;
      }
    }

    if (name === "genre") {
      switch (value) {
        case "action":
          {
            const filteredByGenre = allMovies.filter((movie) =>
              movie.genre_ids.some((id) => id === 28)
            );
            setFilteredByGenre(filteredByGenre);
            setPageNumber(0);
          }
          break;
        case "comedy":
          {
            const filteredByGenre = allMovies.filter((movie) =>
              movie.genre_ids.some((id) => id === 35)
            );
            setFilteredByGenre(filteredByGenre);
            setPageNumber(0);
          }
          break;
        case "horror":
          {
            const filteredByGenre = allMovies.filter((movie) =>
              movie.genre_ids.some((id) => id === 27)
            );
            setFilteredByGenre(filteredByGenre);
            setPageNumber(0);
          }
          break;
        case "mystery":
          {
            const filteredByGenre = allMovies.filter((movie) =>
              movie.genre_ids.some((id) => id === 9648)
            );
            setFilteredByGenre(filteredByGenre);
            setPageNumber(0);
          }
          break;
        case "romance":
          {
            const filteredByGenre = allMovies.filter((movie) =>
              movie.genre_ids.some((id) => id === 10749)
            );
            setFilteredByGenre(filteredByGenre);
            setPageNumber(0);
          }
          break;
        default:
          setFilteredByGenre(allMovies);
          setPageNumber(0);
          break;
      }
    }

    if (name === "additional") {
      switch (value) {
        case "top-rated":
          {
            setAdditionalFilter("top-rated");
            setPageNumber(0);
          }
          break;
        case "newest":
          {
            setAdditionalFilter("newest");
            setPageNumber(0);
          }
          break;
        case "oldest":
          {
            setAdditionalFilter("oldest");
            setPageNumber(0);
          }
          break;
        default:
          setAdditionalFilter("noFilter");
          setPageNumber(0);
          break;
      }
    }
  };

  //handling the search box
  useEffect(() => {
    if (finalFilteredMovies) {
      const filterBySearch = finalFilteredMovies.filter((movie) =>
        movie.title
          ? movie.title.toLowerCase().includes(searchQuery.toLowerCase())
          : movie.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchedMovies(filterBySearch);
    }
  }, [searchQuery, finalFilteredMovies]);

  //Pagination Handling

  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 18;
  const visitedPage = pageNumber * productPerPage;
  const displayingItems = searchedMovies.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedMovies.length / productPerPage);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  //filter by genreQuery (in /home if someone clicked in a genre)
  const { id: idGenreQuery } = useParams();
  const genreSelectRef = useRef(null)

  useEffect(() => {
    if(allMovies && idGenreQuery){
      const filteredByGenreQuery = allMovies.filter((movie) =>
      movie.genre_ids.some((id) => id === Number(idGenreQuery))
    );

    setFilteredByGenre(filteredByGenreQuery);
    }
  }, [idGenreQuery , allMovies]);

  useEffect(() => {
    switch (idGenreQuery) {
      case "35":
          genreSelectRef.current.value = "comedy"
        break;
        case "28":
          genreSelectRef.current.value = "action"
        break;
        case "27":
          genreSelectRef.current.value = "horror"
        break;
        case "9648":
          genreSelectRef.current.value = "mystery"
        break;
        case "10749":
          genreSelectRef.current.value = "romance"
        break;
      default:
        break;
    }
  },[idGenreQuery])

  //scroll to top when content loaded
  useEffect(() => {
    scrollTo(0, 0);
  }, [pageNumber]);

  return (
    <Helmet title={"Movies"}>
      <section className="allMovies">
        <Container>
          <Row className="d-flex align-items-center justify-content-center mb-5">
            <Col lg="6" md="6" sm="6">
              <div className="search-box">
                <input
                  onChange={(e) => {
                    setSearchQuery(e.currentTarget.value), setPageNumber(0);
                  }}
                  type="text"
                  placeholder="Search..."
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>

            <Col
              className="d-flex align-items-center justify-content-center gap-5 flex-wrap  "
              lg="6"
              md="6"
              sm="6"
            >
              <select onChange={handleFilter} name="movieType">
                <option>All movies</option>
                <option value="movies">movies</option>
                <option value="animations">animations</option>
                <option value="series">tv series</option>
              </select>

              <select onChange={handleFilter} ref={genreSelectRef} name="genre">
                <option>All genres</option>
                <option value="action">action</option>
                <option value="comedy">comedy</option>
                <option value="horror">horror</option>
                <option value="mystery">mystery</option>
                <option value="romance">romance</option>
              </select>

              <select onChange={handleFilter} name="additional">
                <option>Additional filters</option>
                <option value="top-rated">top rated</option>
                <option value="newest">newest</option>
                <option value="oldest">oldest</option>
              </select>
            </Col>
          </Row>

          <Row className="pt-5">
            {displayingItems?.length <= 0 ? (
              <div className="spinner-container">
                <div className="lds-dual-ring"></div>
              </div>
            ) : (
              displayingItems?.map((item, index) => (
                <Col
                  xl="2"
                  lg="2"
                  md="3"
                  sm="4"
                  xs="4"
                  className="mb-4 d-flex align-items-center justify-content-center"
                  key={index}
                >
                  <NavLink to={`/movies/${item.id}`}>
                    <div className="movie-item">
                      <img
                        className="w-100"
                        src={baseImgUrl + item.poster_path}
                        alt={item.name}
                      />
                    </div>
                  </NavLink>
                </Col>
              ))
            )}
          </Row>

          {pageCount > 1 ? (
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageChange}
                previousLabel={<i className="ri-arrow-left-s-line"></i>}
                nextLabel={<i className="ri-arrow-right-s-line"></i>}
                activeClassName="active-page"
                containerClassName="paginationBtns"
              />
            </div>
          ) : null}
        </Container>
      </section>
    </Helmet>
  );
};

export default Movies;
