import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { RootState } from "./store";

export const mainSlice = createSlice({
  name: "main",
  initialState,

  reducers: {
    setKeyDates: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.keyDates = action.payload;
    },

    setScreenMode: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.screenMode = action.payload;
    },

    setName: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.name = action.payload;
    },
  },
});

export const { setKeyDates, setScreenMode, setName } = mainSlice.actions;

export const selectKeyDate = (state: RootState) => state.main.keyDates;
export const selectScreenMode = (state: RootState) => state.main.screenMode;
export const selectName = (state: RootState) => state.main.name;

export default mainSlice.reducer;
