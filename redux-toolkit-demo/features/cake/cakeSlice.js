const createSlice = require("@reduxjs/toolkit").createSlice;

// initial states
const initialState = {
  numOfCakes: 10,
};

// in tool kit we write reducers and action creators with in slice,
// there will be no separate action creators as we found in redux
// redux toolkit will automatically create the action creators with the same name as we provided in the reducers
const cakeSlice = createSlice({
  //name for the slice
  name: "cake",
  initialState,
  //reducers will contain multiple objects for each action creators
  reducers: {
    ordered: (state) => {
      // no need to explicitly return the new state
      // also we can directly update the state no need for spread operator(uses immer library)
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

// for using this in the store file  (default export)
module.exports = cakeSlice.reducer;

// actions will take care of action constants, action creators and switch statements in the reducers
// this will be using in index file
module.exports.cakeActions = cakeSlice.actions;
