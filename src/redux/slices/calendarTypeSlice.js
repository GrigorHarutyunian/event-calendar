import { createSlice } from "@reduxjs/toolkit";
const calendarTypeSlice = createSlice({
  name: "calendarType",
  initialState: "Month",
  reducers: {
    changeCalendarType: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeCalendarType } = calendarTypeSlice.actions;
export default calendarTypeSlice.reducer;
