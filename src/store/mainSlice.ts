import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { RootState } from "./store";

// export the rducer functions
export const mainSlice = createSlice({
  name: "main",
  initialState,

  reducers: {
    // save the registration input values
    setKeyDates: (state, action) => {
      state.keyDates = action.payload;
    },

    // set screen mode
    setScreenMode: (state, action) => {
      state.screenMode = action.payload;
    },

    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

// exporting the reducer functions
export const { setKeyDates, setScreenMode, setName } = mainSlice.actions;

// exporting the selectors
export const selectKeyDate = (state: RootState) => state.main.keyDates;
export const selectScreenMode = (state: RootState) => state.main.screenMode;
export const selectName = (state: RootState) => state.main.name;

export default mainSlice.reducer;
