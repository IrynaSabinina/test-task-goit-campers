import { createSelector } from "@reduxjs/toolkit";

export const campersSelector = (state) => state.campers.campers.items;

export const filterSelector = (state) => state.campers.filter;

export const isLoadingSelector = (state) => state.campers.campers.isLoading;

export const errorSelector = (state) => state.campers.campers.error;

export const selectCategory = createSelector(
  [campersSelector, filterSelector],
  (campers, filter) => {
    const campersinTheList = campers.filter((camper) =>
      camper.details.toLowerCase().includes(filter.toLowerCase())
    );
    return campersinTheList;
  }
);
