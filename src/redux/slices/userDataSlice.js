import { createSlice } from "@reduxjs/toolkit";
const userDataSlice = createSlice({
  name: "userData",
  initialState: {},
  reducers: {
    currentUser: (state, action) => {
      return action.payload;
    },

    userDataReloader: (state, action) => {
      console.log("reloading");
      return {};
    },
  },
});

export const { currentUser, userDataReloader } = userDataSlice.actions;
export default userDataSlice.reducer;
