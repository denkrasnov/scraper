import { ProductName } from "../../../backend/scrapers/types";

export enum ActionTypes {
  FETCH = "FETCH",
  FETCH_INIT = "FETCH_INIT",
  FETCH_ERROR = "FETCH_ERROR",
  FETCH_SUCCESS = "FETCH_SUCCESS"
}

export interface State {
  isLoading: boolean;
  isError: string;
  query: string;
  products: Products | null;
}

export interface Fetch {
  type: ActionTypes.FETCH;
  payload: string;
}

interface ActionSuccess {
  type: ActionTypes.FETCH_SUCCESS;
  payload: Products;
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
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  noImage?: boolean;
  shop: string;
  productUrl: string;
}

export interface Products {
  name: ProductName;
  items: Product[];
}

export interface Response {
  data: Products;
}
