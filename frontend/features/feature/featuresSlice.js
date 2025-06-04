import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  features: {},
};

export const featuresSlice = createSlice({
  name: "features",
  initialState,
  reducers: {
    loadFeatures: (state, action) => {
      state.features = action.payload;
    },
    resetFeatures: (state, action) => {
      state.features = initialState;
    },
  },
});

export const { loadFeatures, resetFeatures } = featuresSlice.actions;
export const selectFeatures = (state) => state.features;
export default featuresSlice.reducer;
