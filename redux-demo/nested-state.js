const redux = require("redux");
const produce = require("immer").produce;

// step 1 : nested states
const initialState = {
  name: "Vishwas",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
};

// step 2 : Action types and creators
// action types
const STREET_UPDATED = "STREET_UPDATED";

// action creator
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

// step 3 : Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // //returning nested state update
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };

      // updating nested states using immer
      // produce takes two inputs state and a call back function which receives copy of the current state
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default: {
      return state;
    }
  }
};

// store
const store = redux.createStore(reducer);
console.log("Initial State", store.getState());
// registering listeners
const unsubscribe = store.subscribe(() =>
  console.log("updateState", store.getState())
);

//invoking the action or dispatching the action
store.dispatch(updateStreet("456 Main st3"));
unsubscribe();
