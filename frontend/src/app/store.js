import {
  FLUSH, PAUSE,
  PERSIST, persistReducer, PURGE,
  REGISTER, REHYDRATE
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import agentSlice from "../features/agent/agentSlice";
import { api } from "../features/api/api";
import categoriesSlice from "../features/categories/categoriesSlice";
import featuresSlice from "../features/feature/featuresSlice";
import filterSlice from "../features/filter/filterSlice";
import globalSlice from "../features/global/globalSlice";
import locationsSlice from "../features/location/locationsSlice";
import productsSlice from "../features/products/productsSlice";
import propertiesSlice from "../features/properties/propertiesSlice";

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
  global: globalSlice,
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

setupListeners(store.dispatch);
