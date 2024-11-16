import { createSlice } from '@reduxjs/toolkit';

import { vehicleTypes } from '../constants.js';

const initialState = {
  selectedFilters: [],
  location: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilter(state, action) {
      const filter = action.payload;
      // Якщо вибраний фільтр - це тип кузова (Van, Fully Integrated, Alcove)
      if (vehicleTypes.includes(filter)) {
        // Очищаємо всі типи кузовів перед додаванням нового
        state.selectedFilters = state.selectedFilters.filter(
          f => !vehicleTypes.includes(f)
        );
        // Додаємо новий тип кузова
        state.selectedFilters.push(filter);
      } else {
        // Якщо це не тип кузова, просто перемикаємо фільтр
        if (state.selectedFilters.includes(filter)) {
          // Якщо фільтр вже обраний, видаляємо його зі списку
          state.selectedFilters = state.selectedFilters.filter(
            f => f !== filter
          );
        } else {
          // Додаємо новий фільтр
          state.selectedFilters.push(filter);
        }
      }
    },
    changeLocation(state, action) {
      state.location = action.payload;
    },
  },
});

export const { toggleFilter, changeLocation } = filtersSlice.actions;

export default filtersSlice.reducer;
