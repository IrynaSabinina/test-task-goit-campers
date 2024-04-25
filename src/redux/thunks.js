import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampers } from "../API/helpers.js";
export const getCampersThunk = createAsyncThunk("advert/catalog", async () => {
  const { data } = await fetchCampers();

  return data;
});
// export const getaddContactThunk = createAsyncThunk(
//   "contacts/addContact",
//   async (contact) => {
//     const { data } = await addContactFech(contact);
//     return data;
//   }
// );
getCampersThunk();
// export const deleteContactThunk = createAsyncThunk(
//   "contacts/deleteContact",
//   async (id) => {
//     const { data } = await deleteContactFech(id);

//     return data;
//   }
// );
