import "normalize.css/normalize.css";
import "core-js/stable";
import "regenerator-runtime/runtime";

import "./variables.css";
import "./initial.css";

import React from "react";
import ReactDOM from "react-dom";

import App from "./app/App";

ReactDOM.render(<App />, document.getElementById("root"));
