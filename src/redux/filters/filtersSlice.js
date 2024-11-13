import { createSlice } from '@reduxjs/toolkit';

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
      if (state.selectedFilters.includes(filter)) {
        // Якщо фільтр вже обраний, видаляємо його зі списку
        state.selectedFilters = state.selectedFilters.filter(f => f !== filter);
      } else {
        // Додаємо новий фільтр
        state.selectedFilters.push(filter);
      }
    },
    changeLocation(state, action) {
      state.location = action.payload;
    },
  },
});

export const { toggleFilter, changeLocation } = filtersSlice.actions;

export default filtersSlice.reducer;
