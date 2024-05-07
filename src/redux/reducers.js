import { isAnyOf, createSlice } from '@reduxjs/toolkit';

import { campersInitialState } from './initialState';

import { getCampersThunk } from './thunks';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const getActions = type => isAnyOf(getCampersThunk[type]);
const persistCampers = {
  key: 'catalog',
  storage,
};

export const campers = createSlice({
  name: 'campers',
  initialState: campersInitialState,
  reducers: {
    filter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getCampersThunk.fulfilled, (state, action) => {
        state.campers.items = action.payload;
      })
      .addMatcher(getActions('pending'), state => {
        state.campers.isLoading = true;
      })
      .addMatcher(getActions('rejected'), (state, action) => {
        state.campers.isLoading = false;
        state.campers.error = action.payload;
      })
      .addMatcher(getActions('fulfilled'), state => {
        state.campers.isLoading = false;
        state.campers.error = null;
      }),
});

export const campersReducer = campers.reducer;
const persistedReducer = persistReducer(persistCampers, campersReducer);

export default persistedReducer;
