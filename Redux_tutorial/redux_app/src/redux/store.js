import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart";

// configuring the reducer in store
export const store = configureStore({
  reducer: {
    //will be available as state.cart in react inside useSelector hook
    cart: cartReducer,
  },
});
