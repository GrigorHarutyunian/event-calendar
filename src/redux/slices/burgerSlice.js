import { createSlice } from "@reduxjs/toolkit";
const burgerSlice = createSlice({
  name: "burger",
  initialState: false,
  reducers: {
    changeBurgerState: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeBurgerState } = burgerSlice.actions;
export default burgerSlice.reducer;
