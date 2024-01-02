import { configureStore } from "@reduxjs/toolkit";
import currentDateReducer from "./slices/currentDateSlice";
import modalAddEventReducer from "./slices/modalAddEventSlice";
import selectedDayReducer from "./slices/selectedDaySlice";
import burgerReducer from "./slices/burgerSlice";
export const store = configureStore({
  reducer: {
    currentDate: currentDateReducer,
    modalAddEvent: modalAddEventReducer,
    selectedDay: selectedDayReducer,
    burger: burgerReducer,
  },
});
