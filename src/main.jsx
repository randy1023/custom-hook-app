//import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import "./index.css";

import { MainApp } from "./09-useContext/MainApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    {/* <React.StrictMode> */}
    <MainApp />
    {/* </React.StrictMode> */}
  </Router>
);
