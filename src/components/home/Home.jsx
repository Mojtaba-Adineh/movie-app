import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTrendingMovies } from '../../features/trendingMoviesSlice';
import { Container } from 'reactstrap';
import MovieSlider from './slider/MovieSlider';
import './home.css'
import PopularMovies from './popular-movies/PopularMovies';
import Genres from './genres-section/Genres';
import PopularSeries from './popular-series/PopularSeries';
import PopularAnimations from './popular-animations/PopularAnimations';
import Helmet from '../../common/helmet/Helmet';

const Home = () => {
    return (
        <Helmet title="Home">
            <div className='home'>
                <section className='pt-0' id='trending' >
                    <Container className='slider-container'>
                        <MovieSlider/>
                    </Container>
                </section>
                <section id='popular-movies'>
                    <Container fluid >
                        <PopularMovies/>
                    </Container>
                </section>
                <section className='genres' id='genres'>
                    <Genres id='genres'/>
                </section>
                <section id='popular-series'>
                    <Container fluid>
                        <PopularSeries/>
                    </Container>
                </section>
                <section id='popular-animations'>
                    <Container fluid>
                        <PopularAnimations/>
                    </Container>
                </section>
            </div>
        </Helmet>
    );
};

export default Home;