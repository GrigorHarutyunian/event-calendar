import { createSlice } from "@reduxjs/toolkit";
const userIsLoginSlice = createSlice({
  name: "userData",
  initialState: false,
  reducers: {
    userIsLogin: (state, action) => {
      return !state;
    },

    userIsLoggedReloader: (state, action) => {
      console.log("reloading");
      return false;
    },
  },
});

export const { userIsLogin, userIsLoggedout, userIsLoggedReloader } =
  userIsLoginSlice.actions;
export default userIsLoginSlice.reducer;
