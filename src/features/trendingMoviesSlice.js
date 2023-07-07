import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl, trendingMoviesEndpoint } from "../api config/apiConfig";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

export const fetchTrendingMovies = createAsyncThunk("trendingMovies/fetch", async () => {
    const {data} = await axios.get(baseUrl+trendingMoviesEndpoint);
    return data.results;
});

const trendingMoviesSlice = createSlice({
  name: "trendingMovies",
  initialState,
  extraReducers: (builder) => {
    builder
        .addCase(fetchTrendingMovies.pending , (state) => {
            state.loading = true;
        })
        .addCase(fetchTrendingMovies.fulfilled , (state , action) => {
            state.loading = false;
            state.movies = action.payload
        })
        .addCase(fetchTrendingMovies.rejected , (state , action) => {
            state.loading = false;
            state.error = action.error.message
        })
  },
});

export default trendingMoviesSlice.reducer


