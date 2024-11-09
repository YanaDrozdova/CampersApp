import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from './filters/filtersSlice.js';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
});
