import { createSlice } from "@reduxjs/toolkit";
const burgerSlice = createSlice({
  name: "burger",
  initialState: false,
  reducers: {
    changeBurgerState: (state, action) => {
      return action.payload;
    },

    burgerReloader: (state, action) => {
      console.log("reloading");
      return false;
    },
  },
});

export const { changeBurgerState, burgerReloader } = burgerSlice.actions;
export default burgerSlice.reducer;
