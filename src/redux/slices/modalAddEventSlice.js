import { createSlice } from "@reduxjs/toolkit";

const modalAddEventSlice = createSlice({
  name: "modalSingleDay",
  initialState: false,
  reducers: {
    changeState: (state, action) => {
      return action.payload;
    },
    modalReloader: () => {
      return false;
    },
  },
});

export const { changeState, modalReloader } = modalAddEventSlice.actions;
export default modalAddEventSlice.reducer;
