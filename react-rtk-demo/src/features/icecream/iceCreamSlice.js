import { ordered as cakeOrdered } from "../cake/cakeSlice";
import { createSlice } from "@reduxjs/toolkit";

// initial states
const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  //   extraReducers: {
  //     "cake/ordered": (state) => {
  //       state.numOfIcecreams--;
  //     },
  //   },
  //
  extraReducers: (builder) => {
    //builder.addCase method uses three arguments action type, and a call back function with state and action
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

export default icecreamSlice.reducer;

// actions will be created by slice
export const { ordered, restocked } = icecreamSlice.actions;
