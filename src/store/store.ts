import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});
