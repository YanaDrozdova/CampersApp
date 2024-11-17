import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'campers/getAll',
  async ({ page = 1, limit = 4 }, thunkAPI) => {
    try {
      const { data } = await axios.get('/campers', {
        params: {
          page,
          limit, //параметри пагінації
        },
      });
      console.log('Fetched campers:', data.items);
      return data;
    } catch (error) {
      console.error('Error fetching campers:', error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  'campers/getOneById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
