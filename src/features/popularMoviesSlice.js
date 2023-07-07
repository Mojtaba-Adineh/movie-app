import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { popularMoviesEndpoint , baseUrl } from './../api config/apiConfig';

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

export const fetchPopularMovies = createAsyncThunk("popularMovies/fetch", async () => {
    const {data} = await axios.get(baseUrl+popularMoviesEndpoint);
    return data.results;
});

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState,
  extraReducers: (builder) => {
    builder
        .addCase(fetchPopularMovies.pending , (state) => {
            state.loading = true;
        })
        .addCase(fetchPopularMovies.fulfilled , (state , action) => {
            state.loading = false;
            state.movies = action.payload
        })
        .addCase(fetchPopularMovies.rejected , (state , action) => {
            state.loading = false;
            state.error = action.error.message
        })
  },
});

export default popularMoviesSlice.reducer
