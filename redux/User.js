"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    Login: (state, actions) => (state = actions.payload),
    Logout: (state) => {
      return initialState;
    },
  },
});
export const { Login, Logout } = userSlice.actions;
export default userSlice.reducer;
