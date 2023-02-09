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

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import agentSlice from "../features/agent/agentSlice";
import { api } from "../features/api/api";
import categoriesSlice from "../features/categories/categoriesSlice";
import filterSlice from "../features/filter/filterSlice";
import productsSlice from "../features/products/productsSlice";
import propertiesSlice from "../features/properties/propertiesSlice";
import locationsSlice from "../features/location/locationsSlice";
import featuresSlice from "../features/feature/featuresSlice";

const persistConfig = {
  key: "api",
  storage,
};

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  filter: filterSlice,
  agent: agentSlice,
  properties: propertiesSlice,
  categories: categoriesSlice,
  products: productsSlice,
  locations: locationsSlice,
  features: featuresSlice,
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
    }).concat(api.middleware),
});
