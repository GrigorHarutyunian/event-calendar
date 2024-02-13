import { createSlice } from "@reduxjs/toolkit";
const invitationSlice = createSlice({
  name: "inivation",
  initialState: [],
  reducers: {
    addInivations: (state, action) => {
      return action.payload;
    },
  },
});

export const { addInivations } = invitationSlice.actions;
export default invitationSlice.reducer;
