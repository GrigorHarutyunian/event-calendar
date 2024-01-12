import { createSlice } from "@reduxjs/toolkit";
const selectedDaySlice = createSlice({
  name: "selectedDay",
  initialState: new Date().toDateString(),
  reducers: {
    selectedDay: (state, action) => {
      return action.payload;
    },
    selectedDayReloader: () => {
      console.log("reloading");
      return new Date().toDateString();
    },
  },
});

export const { selectedDay, selectedDayReloader } = selectedDaySlice.actions;
export default selectedDaySlice.reducer;
