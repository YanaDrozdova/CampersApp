import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filtersReducer from './filters/filtersSlice.js';
import campersReducer from './campers/campersSlice.js';

const persistedCampersReducer = persistReducer(
  {
    key: 'camper-info',
    storage,
    whitelist: ['camperInfo'],
  },
  campersReducer
);

export const store = configureStore({
  reducer: {
    campers: persistedCampersReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
