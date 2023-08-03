// we use configure store instead of createStore
const configureStore = require("@reduxjs/toolkit").configureStore;

// // redux logger for setting middleware
// const reduxLogger = require("redux-logger");

// cake slice will be the reducers
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/iceCreamSlice");
const userReducer = require("../features/user/userSlice");

// // creating logger
// const logger = reduxLogger.createLogger();

// configure store accepts an object as argument
const store = configureStore({
  reducer: { cake: cakeReducer, icecream: icecreamReducer, user: userReducer },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// store is now complete and now we can export and import in index file to make use of it
// for accessing the reducer we have utilize the name cake as we provided above
module.exports = store;
