// Bind the api with the store
import { configureStore } from "@reduxjs/toolkit";
import { userAPI } from "./userAPI";

export const store = configureStore({
  reducer: {
    // automatically generates a reducer and middleware
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
});
