import { createSlice } from "@reduxjs/toolkit";

const selectedTimeSlice = createSlice({
  name: "selectedTime",
  initialState: false,
  reducers: {
    getSelectedTime: (state, action) => {
      return action.payload;
    },
  },
});

export const { getSelectedTime } = selectedTimeSlice.actions;
export default selectedTimeSlice.reducer;
