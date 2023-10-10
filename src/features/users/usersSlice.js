import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersAPI from './usersAPI';

const initialState = {
  users: [],
  IsLoading: false,
};

//fetch users ============================================
export const fetchUsersAsync = createAsyncThunk(
  'users/fetch',
  async (_, thunkAPI) => {
    try {
      return await usersAPI.getUsers();
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

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state, action) => {
        state.IsLoading = true;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.IsLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.IsLoading = false;
      });
  },
});

const { actions, reducer } = usersSlice;

export const {} = actions;

export default reducer;
