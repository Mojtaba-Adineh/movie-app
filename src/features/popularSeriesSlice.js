import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl, popularSeriesEndpoint } from './../api config/apiConfig';

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

export const fetchPopularSeries = createAsyncThunk("popularSeries/fetch", async () => {
    const {data} = await axios.get(baseUrl+ popularSeriesEndpoint);
    return data.results;
});

const popularSeriesSlice = createSlice({
  name: "popularMovies",
  initialState,
  extraReducers: (builder) => {
    builder
        .addCase(fetchPopularSeries.pending , (state) => {
            state.loading = true;
        })
        .addCase(fetchPopularSeries.fulfilled , (state , action) => {
            state.loading = false;
            state.movies = action.payload
        })
        .addCase(fetchPopularSeries.rejected , (state , action) => {
            state.loading = false;
            state.error = action.error.message
        })
  },
});

export default popularSeriesSlice.reducer