"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "./User";
import message from "./Message";
import cart from "./Cart";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptTransform({ secretKey: "my-super-secret-key" })],
};
const reducers = combineReducers({ user, cart, message });
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
