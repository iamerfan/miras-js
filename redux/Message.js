"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "",
  message: "",
  title: "",
};

export const messageSlice = createSlice({
  name: "Message",
  initialState,
  reducers: {
    Notification: (state, actions) => (state = actions.payload),
    ClearNotif: (state) => (state = initialState),
  },
});

export const { Notification, ClearNotif } = messageSlice.actions;
export default messageSlice.reducer;
