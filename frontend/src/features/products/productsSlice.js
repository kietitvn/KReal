import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
  compair: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload;
    },
    resetProducts: (state, action) => {
      state.products = initialState;
    },
  },
});

export const { loadProducts, resetProducts } = productsSlice.actions;
export const selectProducts = (state) => state.products;
export default productsSlice.reducer;
