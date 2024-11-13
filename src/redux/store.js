import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from './filters/filtersSlice.js';
import campersReducer from './campers/campersSlice.js';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
  },
});
