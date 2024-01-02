import { createSlice } from "@reduxjs/toolkit";
const selectedDaySlice = createSlice({
  name: "selectedDay",
  initialState: new Date().toDateString(),
  reducers: {
    selectedDay: (state, action) => {
      return action.payload;
    },
  },
});

export const { selectedDay } = selectedDaySlice.actions;
export default selectedDaySlice.reducer;
