const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

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
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

module.exports = icecreamSlice.reducer;

// actions will be created by slice
module.exports.icecreamActions = icecreamSlice.actions;
