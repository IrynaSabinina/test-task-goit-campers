import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampers } from "../API/helpers.js";
export const getCampersThunk = createAsyncThunk("advert/catalog", async () => {
  const { data } = await fetchCampers();

  return data;
});
