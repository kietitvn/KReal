import {
    FLUSH, PAUSE,
    PERSIST, persistReducer, persistStore, PURGE,
    REGISTER, REHYDRATE
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { api } from "@/features/api/api";
import { filterSlice } from "@/features/filter/filterSlice";
import { agentSlice } from "@/features/agent/agentSlice";
import { propertiesSlice } from "@/features/properties/propertiesSlice";
import { categoriesSlice } from "@/features/categories/categoriesSlice";
import { productsSlice } from "@/features/products/productsSlice";
import { locationsSlice } from "@/features/location/locationsSlice";
import { featuresSlice } from "@/features/feature/featuresSlice";
import { globalSlice } from "@/features/global/globalSlice";

const persistConfig = {
    timeout: 1,
    key: "root", // Changed from "api" to "root" since we're persisting the entire store
    storage,
    whitelist: ['filter', 'agent', 'properties', 'categories', 'products', 'locations', 'features', 'global'], // Specify which reducers to persist
};

const reducers = combineReducers({
    [api.reducerPath]: api.reducer,
    filter: filterSlice.reducer,
    agent: agentSlice.reducer,
    properties: propertiesSlice.reducer,
    categories: categoriesSlice.reducer,
    products: productsSlice.reducer,
    locations: locationsSlice.reducer,
    features: featuresSlice.reducer,
    global: globalSlice.reducer,
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

export const persistor = persistStore(store);
