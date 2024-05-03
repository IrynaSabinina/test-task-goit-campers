import { isAnyOf, createSlice } from "@reduxjs/toolkit";

import { campersInitialState } from "./initialState";

import { getCampersThunk } from "./thunks";

const getActions = (type) => isAnyOf(getCampersThunk[type]);

export const campers = createSlice({
  name: "advert/catalog",
  initialState: campersInitialState,
  reducers: {
    filter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCampersThunk.fulfilled, (state, action) => {
        state.campers.items = action.payload;
      })
      .addMatcher(getActions("pending"), (state) => {
        state.campers.isLoading = true;
      })
      .addMatcher(getActions("rejected"), (state, action) => {
        state.campers.isLoading = false;
        state.campers.error = action.payload;
      })
      .addMatcher(getActions("fulfilled"), (state) => {
        state.campers.isLoading = false;
        state.campers.error = null;
      }),
});

export const campersReducer = campers.reducer;
export const { filter } = campers.actions;

// console.log(campers.actions);
