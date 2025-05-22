import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  global: {},
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    loadGlobal: (state, action) => {
      state.global = action.payload;
    },
    resetGlobal: (state, action) => {
      state.global = initialState;
    },
  },
});

export const { loadGlobal, resetGlobal } = globalSlice.actions;
export const selectGlobal = (state) => state.global;
export default globalSlice.reducer;
