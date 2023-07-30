import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FunctionalComponent from "./FunctionExample.jsx";
import ClassComponent from "./ClassComponent.jsx";
import ComponentToView from "./DataBinding.jsx";
import Test from "./LifeCycle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Test />
  </StrictMode>
);
