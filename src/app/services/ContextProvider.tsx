import React, { FC, useContext, createContext } from "react";

import { INITIAL_STATE } from "./fetchProducts/constants";
import fetchProducts from "./fetchProducts";
import { ContextProviderProps, CreateContext } from "./types";

export const StateContext = createContext<CreateContext>([
  INITIAL_STATE,
  () => {}
]);

const ContextProvider: FC<ContextProviderProps> = ({ children }) => (
  <StateContext.Provider value={fetchProducts()}>
    {children}
  </StateContext.Provider>
);

export const useFullContext = () => useContext(StateContext);

export default ContextProvider;
