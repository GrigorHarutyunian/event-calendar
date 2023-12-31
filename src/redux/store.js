import { configureStore } from "@reduxjs/toolkit";
import currentDateReducer from "./slices/currentDateSlice";
import modalSingleDayReducer from "./slices/modalSingleDaySlice";
export const store = configureStore({
  reducer: {
    currentDate: currentDateReducer,
    modalSingleDay: modalSingleDayReducer,
  },
});
