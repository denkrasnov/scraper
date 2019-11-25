import { hot } from "react-hot-loader/root";
import React from "react";

import Home from "./pages/Home";
import ContextProvider from "./services/ContextProvider";

const App = () => (
  <ContextProvider>
    <Home />
  </ContextProvider>
);

export default hot(App);
