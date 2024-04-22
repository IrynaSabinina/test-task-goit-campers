import { createSelector } from "@reduxjs/toolkit";
export const campersSelector = (state) => state.campers.items;

export const filterSelector = (state) => state.filter;

export const isLoadingSelector = (state) => state.campers.isLoading;

export const errorSelector = (state) => state.campers.error;

export const selectCategory = createSelector(
  [campersSelector, filterSelector],
  (campers, filter) => {
    const campersinTheList = campers.filter((camper) =>
      camper.details.toLowerCase().includes(filter.toLowerCase())
    );

    return campersinTheList;
  }
);
