import React, { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import { useDispatch } from 'react-redux'
import { fetchPopularAnimations } from './features/popularAnimationsSlice'
import { fetchTrendingMovies } from './features/trendingMoviesSlice'
import { fetchPopularMovies } from './features/popularMoviesSlice'
import { fetchPopularSeries } from './features/popularSeriesSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTrendingMovies())
    dispatch(fetchPopularAnimations())
    dispatch(fetchPopularMovies())
    dispatch(fetchPopularSeries())
  },[])

  return (
    <>
      <Layout/>
    </>
  )
}

export default App
