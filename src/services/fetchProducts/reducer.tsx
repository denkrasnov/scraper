import { Action, State, ActionTypes } from "./types";

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.FETCH:
      return {
        ...state,
        query: action.payload,
        isError: ""
      };
    case ActionTypes.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: ""
      };
    case ActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload
      };
    case ActionTypes.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.payload
      };

    default:
      throw new Error();
  }
};

export default reducer;
