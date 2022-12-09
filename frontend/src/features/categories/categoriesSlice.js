import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  attributes: {
    name: "",
    description: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
  },
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
});

export default categoriesSlice.reducer;
