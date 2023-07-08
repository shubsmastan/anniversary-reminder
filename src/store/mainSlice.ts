import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

// export the rducer functions
export const mainSlice = createSlice({
  name: "main",
  initialState,

  reducers: {
    // save the registration input values
    setDate: (state, action) => {
      state.keyDates = action.payload;
    },

    // set screen mode
    setScreenMode: (state, action) => {
      state.screenMode = action.payload;
    },
  },
});

// exporting the reducer functions
export const { setDate, setScreenMode } = mainSlice.actions;

// exporting the selectors
export const selectKeyDate = (state) => state.main.keyDates;
export const selectScreenMode = (state) => state.main.screenMode;

export default mainSlice.reducer;
