export const campersSelector = state => state.persistedReducer.campers.items;

export const isLoadingSelector = state =>
  state.persistedReducer.campers.isLoading;

export const errorSelector = state => state.persistedReducer.campers.error;
