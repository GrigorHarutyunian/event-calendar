import { createSlice } from "@reduxjs/toolkit";

const modalSingleDaySlice = createSlice({
  name: "modalSingleDay",
  initialState: false,
  reducers: {
    changeState: (state, action) => {
      return !state;
    },
  },
});

export const { changeState } = modalSingleDaySlice.actions;
export default modalSingleDaySlice.reducer;
