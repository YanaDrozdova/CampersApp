import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, getCamperById } from './operations.js';

const initialState = {
  items: [],
  page: 1,
  camperInfo: {},
  totalCount: 0, // загальна кількість кемперів
  isLoadingCampers: false,
  isLoadingCamperInfo: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    resetCampers(state) {
      state.items = initialState.items;
      state.camperInfo = initialState.camperInfo;
      state.page = 1;
      state.totalCount = initialState.totalCount;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoadingCampers = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = [
          ...state.items,
          ...action.payload.items.filter(
            item =>
              !state.items.some(existingItem => existingItem.id === item.id)
            // перевірка чи є вже такі елементи в масиві, щоб не було дублювання даних
          ),
        ];

        state.totalCount = action.payload.total;
        state.isLoadingCampers = false;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        console.error('Fetch campers failed:', action.payload);
        state.isLoadingCampers = false;
        state.error = action.payload;
      })
      .addCase(getCamperById.pending, state => {
        state.isLoadingCamperInfo = true;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoadingCamperInfo = false;
        state.camperInfo = action.payload;
      })
      .addCase(getCamperById.rejected, (state, action) => {
        state.isLoadingCamperInfo = false;
        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;
