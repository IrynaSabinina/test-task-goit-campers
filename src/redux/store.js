import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./reducers";

export const store = configureStore({
  reducer: campersReducer,
  devTools: process.env.NODE_ENV === "development",
});
