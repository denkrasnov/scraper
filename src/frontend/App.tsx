import { hot } from "react-hot-loader/root";
import React from "react";
import { ApolloProvider } from "@apollo/client";

import Home from "./pages/Home";
import { client } from "./services/apollo";

const App = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);

export default hot(App);
