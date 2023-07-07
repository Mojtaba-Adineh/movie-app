import React from 'react';
import {Routes , Route , Navigate } from "react-router-dom"
import Home from '../components/home/Home';
import Movies from '../components/movies/Movies';
import Contact from '../components/contact/Contact';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import NotFound from '../components/notFound/NotFound';
import MovieDetail from '../components/movie-detail/MovieDetail';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={"/home"}/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/movies/:id' element={<MovieDetail/>}/>
            <Route path='/movies/genres/:id' element={<Movies/>}/>  
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/*' element={<NotFound/>}/>
            
        </Routes>
    );
};

export default Routers;