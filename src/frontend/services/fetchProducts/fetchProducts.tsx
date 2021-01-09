import { useEffect, useReducer, Dispatch } from "react";
import axios from "axios";

import { INITIAL_STATE } from "./constants";
import reducer from "./reducer";
import { Action, State, ActionTypes, Response } from "./types";

const fetchProducts = (): [State, Dispatch<Action>] => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: ActionTypes.FETCH_INIT });
      try {
        const result: Response = await axios.get(`/news`);

        if (!didCancel) {
          dispatch({
            type: ActionTypes.FETCH_SUCCESS,
            payload: result.data
          });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: ActionTypes.FETCH_ERROR, payload: error });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, []);

  return [state, dispatch];
};

export default fetchProducts;
