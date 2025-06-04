import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: {},
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    loadCategories: (state, action) => {
      state.categories = action.payload;
    },
    resetCategories: (state, action) => {
      state = initialState;
    },
  },
});
export const { loadCategories, resetCategories } = categoriesSlice.actions;
export const selectCategories = (state) => state.categories;
export default categoriesSlice.reducer;
