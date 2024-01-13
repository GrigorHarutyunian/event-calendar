import { createSlice } from "@reduxjs/toolkit";
const userFirendsSlice = createSlice({
  name: "userFriends",
  initialState: [],
  reducers: {
    getFriendsList: (state, action) => {
      return action.payload;
    },

    userFriendsReloader: (state, action) => {
      return [];
    },
  },
});

export const { getFriendsList } = userFirendsSlice.actions;
export default userFirendsSlice.reducer;
