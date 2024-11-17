import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, getCamperById } from './operations.js';

const initialState = {
  items: [],
  camperInfo: {},
  totalCount: 0, // загальна кількість кемперів
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        // console.log('Fulfilled fetchCampers:', action.payload);
        state.items = [...state.items, ...action.payload.items];
        state.totalCount = action.payload.total;
        state.isLoading = false;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        console.error('Fetch campers failed:', action.payload);
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCamperById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.camperInfo = action.payload;
      })
      .addCase(getCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;
