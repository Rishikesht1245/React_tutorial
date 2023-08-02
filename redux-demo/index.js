const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const applyMiddleware = redux.applyMiddleware;

// requiring the middleware
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// Action types for cake
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// action types for Ice creams
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// action creator in redux for order cake
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

//action creator for Restock cake
function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

// action creators for IceCream
function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// // state
// const initialState = { numOfCakes: 10, numOfIceCreams: 20 };

// ============= SPLITTING INITIAL STATES =======================
//cakes states
const initialCakeState = {
  numOfCakes: 10,
};

// ice cream states
const initialIceCreamState = {
  numOfIceCreams: 20,
};

// ============== SPLITTING REDUCERS ============================
// (previousState, action) => newState;
// Reducer cakes
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      //reducing the current count
      return {
        //create copy using spread operator and only change the updated properties
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};

// Reducer Ice creams
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      //reducing the current count
      return {
        //create copy using spread operator and only change the updated properties
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };

    default:
      return state;
  }
};

//combining reducers before providing it to the store
const rootReducer = combineReducers({
  // cake and iceCream, we should use to access the states => state.iceCream.numOfIceCreams
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// store Responsibilities
// 1. holding apps state => reducer
// 2. getState for accessing the state.
// 4. subscribe to store
// 3 . dispatch method to update the state
// 4. unsubscribe

// providing logger inside the applyMiddleware function for logging
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial State", store.getState());
// to reflect the changes in store into our application we should subscribe
// whenever the state is updated the listener(subscribe) will be called.
const unsubscribe = store.subscribe(() => {});

// // store.dispatch will call the order cake function and since it is subscribed it will console the updateState
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

// store.dispatch(restockCake(5));

//Using bindActionCreators for binding the action with the store
// bindAction Creators takes two inputs an object where we specify the actions and the place we want to bing the actions
const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

// unsubscribing returning from the subscribe function
unsubscribe();
