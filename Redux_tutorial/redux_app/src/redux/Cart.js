//provider == providing values
//store  == storing the values and inject the values to react
//reducer == logic
//Action == action from user end

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  //reducers accept multiple functions (actions)
  reducers: {
    addToCart: (state) => {
      state.cartCount = 1;
    },
    increment: (state) => {
      state.cartCount += 1;
    },
    decrement: (state) => {
      state.cartCount -= 1;
    },
  },
});

// reducer function will be available in sliceName.actions, to be used in react
export const { increment, decrement, addToCart } = cartSlice.actions;

// this will be used in the store file it will give access to all values and actions
export default cartSlice.reducer;
