import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './reducers';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistCampers = {
  key: 'root',
  storage,
};

const store = configureStore({
  reducer: {
    campers: persistReducer(persistCampers, campersReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
let persistor = persistStore(store);
export { store, persistor };
