import { configureStore } from '@reduxjs/toolkit';
import locationReducer from 'src/features/Map/MapSlice';
import catagoryReducer from 'src/features/catagory/catagorySlice'
import availableReducer from 'src/features/home/homeSlice'

export const store = configureStore({
  reducer: {
    location: locationReducer,
    catagory: catagoryReducer,
    availability: availableReducer,
  },
});
