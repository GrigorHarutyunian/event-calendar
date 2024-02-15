import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import currentDateReducer from "./slices/currentDateSlice";
import modalAddEventReducer from "./slices/modalAddEventSlice";
import selectedDayReducer from "./slices/selectedDaySlice.js";
import burgerReducer from "./slices/burgerSlice.js";
import eventsReducer from "./slices/eventsSlice.js";
import calendarTypeReducer from "./slices/calendarTypeSlice.js";
import userDataReducer from "./slices/userDataSlice.js";
import userIsLoginReducer from "./slices/userIsLoginSlice.js";
import userFirendsReducer from "./slices/userFriendsSlice.js";
import persistStore from "redux-persist/es/persistStore";
import selectedTimeReducer from "./slices/selectedTimeSlice.js";
import inivationReducer from "./slices/invitationSlice.js";
import modalInvitationsReducer from "./slices/modalInvitationsSlice.js";
import ownEventsReducer from "./slices/ownEventsSlice.js";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  currentDate: currentDateReducer,
  modalAddEvent: modalAddEventReducer,
  selectedDay: selectedDayReducer,
  burger: burgerReducer,
  events: eventsReducer,
  calendarType: calendarTypeReducer,
  userData: userDataReducer,
  userIsLogin: userIsLoginReducer,
  userFirends: userFirendsReducer,
  selectedTime: selectedTimeReducer,
  invitation: inivationReducer,
  modalInvitations: modalInvitationsReducer,
  ownEvents: ownEventsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persister = persistStore(store);
export default store;
