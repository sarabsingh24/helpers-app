import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  latitude: 0,
  longitude:0,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    locationSliceFun: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

const { actions, reducer } = locationSlice;

export const { locationSliceFun } = actions;

export default reducer;
