import { Dispatch, ReactNode } from "react";

import { State, Action } from "./fetchProducts/types";

export interface ContextProviderProps {
  children: ReactNode;
}

export type CreateContext = [State, Dispatch<Action>];
