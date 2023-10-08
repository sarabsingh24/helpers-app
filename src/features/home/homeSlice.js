import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  IsAvailable: false,
};

const availabilitySlice = createSlice({
  name: 'available',
  initialState,
  reducers: {
    availabilityFun: (state, action) => {
      state.IsAvailable = action.payload;
    },
  },
});

const { actions, reducer } = availabilitySlice;

export const { availabilityFun } = actions;

export default reducer;
