import { createSlice } from "@reduxjs/toolkit";
import { StateType, initialState } from "./initialState";
import { RootState } from "./store";

// export the rducer functions
export const mainSlice = createSlice({
  name: "main",
  initialState,

  reducers: {
    // save the registration input values
    setDate: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.keyDates = action.payload;
    },

    // set screen mode
    setScreenMode: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.screenMode = action.payload;
    },
  },
});

// exporting the reducer functions
export const { setDate, setScreenMode } = mainSlice.actions;

// exporting the selectors
export const selectKeyDate = (state: RootState) => state.main.keyDates;
export const selectScreenMode = (state: RootState) => state.main.screenMode;

export default mainSlice.reducer;
