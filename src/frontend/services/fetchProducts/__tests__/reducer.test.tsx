import reducer from "../reducer";
import { INITIAL_STATE } from "../constants";
import { ActionTypes } from "../types";
import { ProductName, Channels } from "../../../../backend/scrapers/types";

describe("reducer", () => {
  it("should return correct state when FETCH", () => {
    const payload = "__PAYLOAD__";
    const state = reducer(INITIAL_STATE, {
      type: ActionTypes.FETCH,
      payload
    });

    expect(state).toEqual({
      ...INITIAL_STATE,
      query: payload
    });
  });

  it("should return correct state when FETCH_INIT", () => {
    const state = reducer(INITIAL_STATE, {
      type: ActionTypes.FETCH_INIT
    });

    expect(state).toEqual({ ...INITIAL_STATE, isLoading: true });
  });

  it("should return correct state when FETCH_SUCCESS", () => {
    const productPayload = {
      name: ProductName.MD,
      items: [
        {
          imageURL: "__IMAGE_URL__",
          date: "9:00",
          header: "__TITLE__",
          newsUrl: "__URL__",
          channel: Channels.TV8
        }
      ]
    };
    const state = reducer(INITIAL_STATE, {
      type: ActionTypes.FETCH_SUCCESS,
      payload: productPayload
    });

    expect(state).toEqual({ ...INITIAL_STATE, products: productPayload });
  });

  it("should return correct state when FETCH_ERROR", () => {
    const errorPayload = "__ERROR__";
    const state = reducer(INITIAL_STATE, {
      type: ActionTypes.FETCH_ERROR,
      payload: errorPayload
    });
    expect(state).toEqual({ ...INITIAL_STATE, isError: errorPayload });
  });

  it("should throw Error when unknown action", () => {
    const somePayload = "__PAYLOAD__";

    expect(() =>
      reducer(INITIAL_STATE, {
        type: "__FOO__" as ActionTypes.FETCH,
        payload: somePayload
      })
    ).toThrow();
  });
});
