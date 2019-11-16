import React, {
  useEffect,
  useReducer,
  useContext,
  createContext,
  Dispatch,
  FC
} from "react";
import axios from "axios";

import {
  Action,
  State,
  ActionTypes,
  ProductsProviderProps,
  Product
} from "./types";

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.FETCH:
      return {
        ...state,
        query: action.payload,
        isLoading: true,
        isError: ""
      };
    case ActionTypes.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: ""
      };
    case ActionTypes.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.payload
      };
    case ActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload
      };
    default:
      throw new Error();
  }
};

const initialState = {
  isLoading: false,
  isError: "",
  query: "",
  products: null
};

const fetchProducts = (): [State, Dispatch<Action>] => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { query } = state;

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: ActionTypes.FETCH_INIT });
      try {
        const result: {
          data: { products: Product[] | null };
        } = await axios.post("/search", { query }); // TODO": GET and type data

        if (!didCancel) {
          dispatch({
            type: ActionTypes.FETCH_SUCCESS,
            payload: result.data.products
          });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: ActionTypes.FETCH_ERROR, payload: error });
        }
        // eslint-disable-next-line no-console
        console.error("Something went wrong:", error);
      }
    };

    if (query) {
      fetchData();
    }

    return () => {
      didCancel = true;
    };
  }, [query]);

  return [state, dispatch];
};

interface MainReducer {
  products: [State, Dispatch<Action>];
}

export const StateContext = createContext<MainReducer>({
  products: [initialState, () => {}]
});

const mainReducer = () => ({
  products: fetchProducts()
});

export const ProductsProvider: FC<ProductsProviderProps> = ({ children }) => (
  <StateContext.Provider value={mainReducer()}>
    {children}
  </StateContext.Provider>
);

export const useFullContext = () => useContext(StateContext);

export default ProductsProvider;
