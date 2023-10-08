import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import catagoryAPI from './catagoryAPI';

const initialState = {
  catagory: [],
  IsLoading: false,
};

//fetch catagory============================================
export const fetchCatagoryAsync = createAsyncThunk(
  'catagory/fetch',
  async (_, thunkAPI) => {
    try {
      return await catagoryAPI.getCatagory();
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

const catagorySlice = createSlice({
  name: 'catagory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatagoryAsync.pending, (state, action) => {
        state.IsLoading = true;
      })
      .addCase(fetchCatagoryAsync.fulfilled, (state, action) => {
        state.IsLoading = false;
        state.catagory = action.payload;
      })
      .addCase(fetchCatagoryAsync.rejected, (state, action) => {
        state.IsLoading = false;
      });
  },
});

const { actions, reducer } = catagorySlice;

export const {} = actions;

export default reducer;
