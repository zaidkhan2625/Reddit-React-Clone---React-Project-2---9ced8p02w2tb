import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import StateProvider from "./components/StatePeovider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StateProvider>
      <App />
    </StateProvider>
 
);
