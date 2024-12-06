import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'campers/getAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const page = state.campers.page;
    const locationFilter = state.filters.location;
    const vehicleEquipmentFilter = state.filters.equipmentFilters;
    let vehicleTypeFilter =
      state.filters.vehicleType.charAt(0).toLowerCase() +
      state.filters.vehicleType.slice(1);

    if (vehicleTypeFilter === 'van') {
      vehicleTypeFilter = 'panelTruck';
    }

    try {
      const { data } = await axios.get('/campers', {
        params: {
          page,
          location: locationFilter,
          form: vehicleTypeFilter,
          limit: 4, //параметри
          ...vehicleEquipmentFilter,
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
