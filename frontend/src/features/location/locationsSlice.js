import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    loadLocations: (state, action) => {
      state = action.payload;
    },
    resetLocations: (state, action) => {
      state = initialState;
    },
  },
});

export const { loadLocations, resetLocations } = locationsSlice.actions;
export default locationsSlice.reducer;
