import { createSlice } from "@reduxjs/toolkit";

const currentDateSlice = createSlice({
  name: "currentDate",
  initialState: new Date().toDateString(),
  reducers: {
    nextMonth: (state, action) => {
      const date = new Date(state);
      return new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        1
      ).toDateString();
    },
    prevMonth: (state, action) => {
      const date = new Date(state);
      return new Date(
        date.getFullYear(),
        date.getMonth() - 1,
        1
      ).toDateString();
    },
  },
});

export const { nextMonth, prevMonth } = currentDateSlice.actions;
export default currentDateSlice.reducer;
