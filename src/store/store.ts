import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice";

export const store: any = configureStore({
  reducer: {
    main: mainReducer,
  },
});
