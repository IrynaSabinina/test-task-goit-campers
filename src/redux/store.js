import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./reducers";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistCampers = {
  key: "campers",
  storage,
  whitelist: ["token", "user"],
};

const store = configureStore({
  reducer: {
    campers: persistReducer(persistCampers, campersReducer),
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
let persistor = persistStore(store);
export { store, persistor };
