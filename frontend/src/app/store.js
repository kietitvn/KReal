import { configureStore } from "@reduxjs/toolkit";
import agentSlice from "../features/agent/agentSlice";
import { api } from "../features/api/api";
import filterSlice from "../features/filter/filterSlice";
import propertiesSlice from "../features/properties/propertiesSlice";
import categoriesSlice from "../features/categories/categoriesSlice";
import productsSlice from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    properties: propertiesSlice,
    categories: categoriesSlice,
    products: productsSlice,
    filter: filterSlice,
    agent: agentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
