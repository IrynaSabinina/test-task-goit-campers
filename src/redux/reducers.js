import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { campersInitialState } from "./initialState";

import { getCampersThunk } from "./thunks";

const getActions = (type) => isAnyOf(getCampersThunk[type]);

export const campersSlice = createSlice({
  name: "campers",
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

export const campersReducer = campersSlice.reducer;
export const { filter } = campersSlice.actions;

// console.log(campersSlice.actions);
