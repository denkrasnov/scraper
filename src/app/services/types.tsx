import { ReactNode } from "react";

export enum ActionTypes {
  FETCH = "FETCH",
  FETCH_INIT = "FETCH_INIT",
  FETCH_ERROR = "FETCH_ERROR",
  FETCH_SUCCESS = "FETCH_SUCCESS"
}

export interface State extends Products {
  isLoading: boolean;
  isError: string;
  query: string;
  // products: Products;
}

interface Fetch {
  type: ActionTypes.FETCH;
  payload: string;
}

interface ActionSuccess {
  type: ActionTypes.FETCH_SUCCESS;
  payload: Product[] | null;
}

interface ActionInit {
  type: ActionTypes.FETCH_INIT;
}

interface ActionError {
  type: ActionTypes.FETCH_ERROR;
  payload: any;
}

export type Action = ActionSuccess | ActionInit | ActionError | Fetch;

export interface Product {
  id: number;
  title: string;
  imageUrl: string;
}

export interface Products {
  products?: Product[] | null;
}

// export type Products = Product[] | null;

export interface ProductsProviderProps {
  children: ReactNode;
}
