"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    AddToCart: (state, actions) => {
      const newState = [...state];
      const isNotValid = state.find((item) => item.id === actions.payload.id);
      if (isNotValid) return;
      newState.push(actions.payload);
      return newState;
    },
    RemoveFromCart: (state, actions) =>
      state.filter((item) => item.id !== actions.payload),

    ClearAll: (state) => (state = initialState),
    Increase: (state, actions) => {
      const item = state.find((item) => item.id === actions.payload);
      item.quantity = item.quantity + 1;
      return state;
    },
    Decrease: (state, actions) => {
      const item = state.find((item) => item.id === actions.payload);
      if (item.quantity <= 1) return;
      item.quantity = item.quantity - 1;
      return state;
    },
  },
});
export const { AddToCart, RemoveFromCart, ClearAll, Increase, Decrease } =
  cartSlice.actions;
export default cartSlice.reducer;
