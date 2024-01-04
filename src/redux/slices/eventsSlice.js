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
  },
});

export const { getEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
