import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: {},
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    loadLocations: (state, action) => {
      state.locations = action.payload;
    },
    resetLocations: (state, action) => {
      state.locations = initialState;
    },
  },
});

export const { loadLocations, resetLocations } = locationsSlice.actions;
export const selectLocations = (state) => state.locations;
export default locationsSlice.reducer;
