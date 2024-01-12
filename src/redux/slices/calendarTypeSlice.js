import { createSlice } from "@reduxjs/toolkit";
const calendarTypeSlice = createSlice({
  name: "calendarType",
  initialState: "Month",
  reducers: {
    changeCalendarType: (state, action) => {
      return action.payload;
    },
    calendarTypereloader: (state, action) => {
      console.log("reloading");
      return "Month";
    },
  },
});

export const { changeCalendarType, calendarTypereloader } =
  calendarTypeSlice.actions;
export default calendarTypeSlice.reducer;
