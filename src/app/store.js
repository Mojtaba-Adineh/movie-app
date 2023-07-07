import { configureStore } from "@reduxjs/toolkit";
import trendingMoviesReducer from "../features/trendingMoviesSlice"
import popularMoviesReducer from "../features/popularMoviesSlice"
import popularSeriesReducer from "../features/popularSeriesSlice"
import popularAnimationsReducer from "../features/popularAnimationsSlice"
import menuReducer from "../features/menuSlice"


const store = configureStore({
    reducer: {
        trendingMovies : trendingMoviesReducer,
        popularMovies : popularMoviesReducer,
        popularSeries : popularSeriesReducer ,
        popularAnimations : popularAnimationsReducer,
        menu : menuReducer,
    }
})

export default store;