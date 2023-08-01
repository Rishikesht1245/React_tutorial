import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//react-redux is the package used by react to communicate with redux
import { Provider } from "react-redux";
//importing store
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
