import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import mapAPI from './MapAPI'

const initialState = {
  myLocation:{},
  newarByOnlineUsers: {},
};




//fetch users============================================
export const getOnlineNearbyUsersAsync = createAsyncThunk(
  'user/get',
  async (_, thunkAPI) => {
    try {
      return await mapAPI.getUsers();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const locationSlice = createSlice({
  name: 'nearByOnlineUsers',
  initialState,
  reducers: { 
    locationSliceFun: (state, action) => {
      state.myLocation.latitude = action.payload.latitude;
      state.myLocation.longitude = action.payload.longitude;},
    },
  extraReducers:(builder)=>{
    builder
      .addCase(getOnlineNearbyUsersAsync.pending, (state, action) => {
        state.IsLoading = true;
      })
      .addCase(getOnlineNearbyUsersAsync.fulfilled, (state, action) => {
        state.IsLoading = false;
        state.newarByOnlineUsers = action.payload;
      })
      .addCase(getOnlineNearbyUsersAsync.rejected, (state, action) => {
        state.IsLoading = false;
      });
  }
});

const { actions, reducer } = locationSlice;

export const { locationSliceFun } = actions;

export default reducer;
