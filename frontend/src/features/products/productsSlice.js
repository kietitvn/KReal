import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  attributes: {
    name: "",
    location: "",
    description: "",
    price: 0,
    yearBuilt: 0,
    width: 0,
    length: 0,
    categoryID: 1,
    status: "",
    bedRoom: 0,
    bathRoom: 0,
    floor: 0,
    direction: "",
    feature_ids: [],
    legal: "",
    image: [],
    cover: null,
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
});

export default productsSlice.reducer;
