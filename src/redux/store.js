import { configureStore } from "@reduxjs/toolkit";
import currentDateReducer from "./slices/currentDateSlice";
import modalAddEventReducer from "./slices/modalAddEventSlice";
import selectedDayReducer from "./slices/selectedDaySlice.js";
import burgerReducer from "./slices/burgerSlice.js";
import eventsReducer from "./slices/eventsSlice.js";
import calendarTypeReducer from "./slices/calendarTypeSlice.js";
import userDataReducer from "./slices/userDataSlice.js";
import userIsLoginReducer from "./slices/userIsLoginSlice.js";
import userFirendsReducer from "./slices/userFriendsSlice.js";
// import weekEventsReducer from "./slices/weekEventsSlice";

export const store = configureStore({
  reducer: {
    currentDate: currentDateReducer,
    modalAddEvent: modalAddEventReducer,
    selectedDay: selectedDayReducer,
    burger: burgerReducer,
    events: eventsReducer,
    calendarType: calendarTypeReducer,
    userData: userDataReducer,
    userIsLogin: userIsLoginReducer,
    userFirends: userFirendsReducer,
    // weekEvents: weekEventsReducer,
  },
});
