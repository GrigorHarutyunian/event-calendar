import { configureStore } from "@reduxjs/toolkit";
import currentDateReducer from "./slices/currentDateSlice";
import modalAddEventReducer from "./slices/modalAddEventSlice";
import selectedDayReducer from "./slices/selectedDaySlice.js";
import burgerReducer from "./slices/burgerSlice.js";
import eventsReducer from "./slices/eventsSlice.js";

export const store = configureStore({
  reducer: {
    currentDate: currentDateReducer,
    modalAddEvent: modalAddEventReducer,
    selectedDay: selectedDayReducer,
    burger: burgerReducer,
    events: eventsReducer,
  },
});
