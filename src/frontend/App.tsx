import { hot } from "react-hot-loader/root";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { ArticlePage } from "./pages/ArticlePage";
import { client } from "./services/apollo";

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ArticlePage />} path="/:id" />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);

export default hot(App);
