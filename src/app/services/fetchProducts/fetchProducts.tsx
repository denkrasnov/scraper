import { useEffect, useReducer, Dispatch } from "react";
import axios from "axios";

import { INITIAL_STATE } from "./constants";
import reducer from "./reducer";
import { Action, State, ActionTypes, Product } from "./types";

const fetchProducts = (): [State, Dispatch<Action>] => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
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
        console.log("Something went wrong:", error);
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

export default fetchProducts;
