import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl, popularAnimationsEndpoint } from '../api config/apiConfig';

const initialState = {
  animations: [],
  loading: false,
  error: null,
};

export const fetchPopularAnimations = createAsyncThunk("popularAnimations/fetch", async () => {
    const {data} = await axios.get(baseUrl+ popularAnimationsEndpoint);
    return data.results;
});

const popularAnimationsSlice = createSlice({
  name: "popularAnimations",
  initialState,
  extraReducers: (builder) => {
    builder
        .addCase(fetchPopularAnimations.pending , (state) => {
            state.loading = true;
        })
        .addCase(fetchPopularAnimations.fulfilled , (state , action) => {
            state.loading = false;
            state.animations = action.payload
        })
        .addCase(fetchPopularAnimations.rejected , (state , action) => {
            state.loading = false;
            state.error = action.error.message
        })
  },
});

export default popularAnimationsSlice.reducer