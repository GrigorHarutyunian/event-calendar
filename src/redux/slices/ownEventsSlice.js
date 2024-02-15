import { createSlice } from "@reduxjs/toolkit";
const ownEventsSlice = createSlice({
  name: "ownEvents",
  initialState: [],
  reducers: {
    addOwnEvents: (state, action) => {
      return action.payload;
    },
  },
});

export const { addOwnEvents } = ownEventsSlice.actions;
export default ownEventsSlice.reducer;
