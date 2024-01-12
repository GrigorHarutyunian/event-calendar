import { createSlice } from "@reduxjs/toolkit";
const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    busyHours: [],
  },
  reducers: {
    getEvent: (state, action) => {
      return {
        events: action.payload.events,
        busyHours: action.payload.busyHours,
      };
    },
    eventsReloader: (state, action) => {
      console.log("reloading");
      return {
        events: [],
        busyHours: [],
      };
    },
  },
});

export const { getEvent, eventsReloader } = eventsSlice.actions;
export default eventsSlice.reducer;
