import { configureStore, combineReducers } from "@reduxjs/toolkit";
import agentSlice from "../features/agent/agentSlice";
import { api } from "../features/api/api";
import categoriesSlice from "../features/categories/categoriesSlice";
import filterSlice from "../features/filter/filterSlice";
import productsSlice from "../features/products/productsSlice";
import propertiesSlice from "../features/properties/propertiesSlice";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  properties: propertiesSlice,
  categories: categoriesSlice,
  products: productsSlice,
  filter: filterSlice,
  agent: agentSlice,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(api.middleware),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        /* ignore persistance actions */
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
