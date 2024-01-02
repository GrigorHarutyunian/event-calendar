import { createSlice } from "@reduxjs/toolkit";

const modalAddEventSlice = createSlice({
  name: "modalSingleDay",
  initialState: false,
  reducers: {
    changeState: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeState } = modalAddEventSlice.actions;
export default modalAddEventSlice.reducer;
