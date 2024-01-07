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
        date.getDate()
      ).toDateString();
    },

    prevMonth: (state, action) => {
      const date = new Date(state);
      return new Date(
        date.getFullYear(),
        date.getMonth() - 1,
        date.getDate()
      ).toDateString();
    },
    thisMonth: (state, action) => {
      return new Date().toDateString();
    },

    nextYear: (state, action) => {
      const date = new Date(state);
      return new Date(
        date.getFullYear() + 1,
        date.getMonth(),
        1
      ).toDateString();
    },
    prevYear: (state, action) => {
      const date = new Date(state);
      return new Date(
        date.getFullYear() - 1,
        date.getMonth(),
        date.getDate() - 7
      ).toDateString();
    },

    nexTWeek: (state, action) => {
      let one = 0;
      const date = new Date(state);
      return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 7
      ).toDateString();
    },
    prevWeek: (state, action) => {
      let one = 0;
      const date = new Date(state);
      return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() - 7
      ).toDateString();
    },
    setDate: (state, action) => {
      const date = new Date(action.payload);
      return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      ).toDateString();
    },
  },
});

export const {
  nextMonth,
  prevMonth,
  thisMonth,
  nextYear,
  prevYear,
  nexTWeek,
  prevWeek,
  setDate,
} = currentDateSlice.actions;
export default currentDateSlice.reducer;
