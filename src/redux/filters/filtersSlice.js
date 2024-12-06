import { createSlice } from '@reduxjs/toolkit';

import { vehicleEquipments, vehicleTypes } from '../constants.js';

const initialState = {
  selectedFilters: [],
  location: '',
  vehicleType: '',
  equipmentFilters: {},
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
        // Оновлюємо тільки тип кузова, без додавання до масиву selectedFilters
        state.vehicleType = filter.replace(' ', '');
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

        // Перевіряємо, чи це фільтр обладнання і оновлюємо equipmentFilters
        if (vehicleEquipments.includes(filter)) {
          if (filter === 'automatic') {
            state.equipmentFilters['transmission'] = 'automatic';
          } else {
            state.equipmentFilters[filter] = true;
          }
        }
      }
      // Оновлюємо equipmentFilters: видаляємо фільтри, яких немає в selectedFilters
      Object.keys(state.equipmentFilters).forEach(key => {
        if (!state.selectedFilters.includes(key) && key !== 'transmission') {
          delete state.equipmentFilters[key];
        }
      });

      // Якщо в selectedFilters немає фільтра "automatic", видаляємо transmission
      if (!state.selectedFilters.includes('automatic')) {
        delete state.equipmentFilters['transmission'];
      }
    },
    changeLocation(state, action) {
      state.location = action.payload;
    },
    resetFilters(state) {
      state.selectedFilters = [];
      state.location = '';
      state.vehicleType = '';
      state.equipmentFilters = {};
    },
  },
});

export const { toggleFilter, changeLocation, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
