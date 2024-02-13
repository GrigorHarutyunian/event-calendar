import { createSlice } from "@reduxjs/toolkit";
const modalInvitationsSlice = createSlice({
  name: "modalInvitations",
  initialState: false,
  reducers: {
    modalInvitations: (state, action) => {
      return action.payload;
    },
  },
});

export const { modalInvitations } = modalInvitationsSlice.actions;
export default modalInvitationsSlice.reducer;
