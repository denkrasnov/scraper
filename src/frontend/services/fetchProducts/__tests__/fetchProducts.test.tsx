import mockAxios from "jest-mock-axios";
import { renderHook, act, cleanup } from "@testing-library/react-hooks";

import { INITIAL_STATE } from "../constants";
import { Fetch, ActionTypes } from "../types";
import fetchProducts from "..";

describe("fetchProducts", () => {
  afterEach(() => {
    mockAxios.reset();
    cleanup();
  });

  const dispatchArguments = {
    type: ActionTypes.FETCH,
    payload: "tvs"
  } as Fetch;
  const resultState = { ...INITIAL_STATE, query: "tvs" };
  const response = { data: { name: "tv", products: [{ title: "__TITLE__" }] } };
  const errorResponse = { error: "fetch failed" };

  it("should return data with a successful request", async () => {
    const { result, waitForNextUpdate } = renderHook(() => fetchProducts());
    act(() => {
      result.current[1](dispatchArguments);
    });

    expect(mockAxios.get).toHaveBeenCalledWith("/news");

    mockAxios.mockResponse(response);

    await waitForNextUpdate();

    expect(result.current[0]).toEqual({
      ...resultState,
      products: response.data
    });
  });

  it("should return error if api error", async () => {
    const { result, waitForNextUpdate } = renderHook(() => fetchProducts());
    act(() => {
      result.current[1](dispatchArguments);
    });

    expect(mockAxios.get).toHaveBeenCalledWith("/news");
    mockAxios.mockError(errorResponse);

    await waitForNextUpdate();

    expect(result.current[0]).toEqual({
      ...resultState,
      isError: errorResponse
    });
  });

  it("should return previous state if didCancel=true", async () => {
    const { result, unmount } = renderHook(() => fetchProducts());

    act(() => {
      result.current[1](dispatchArguments);
    });

    expect(mockAxios.get).toHaveBeenCalledWith("/news");
    mockAxios.mockResponse(response);

    // eg. a user decided to leave the page
    unmount();

    expect(result.current[0]).toEqual({ ...resultState, isLoading: true });
  });

  it("should return previous state if didCancel=true and fetch failed", async () => {
    const { result, unmount } = renderHook(() => fetchProducts());

    act(() => {
      result.current[1](dispatchArguments);
    });

    expect(mockAxios.get).toHaveBeenCalledWith("/news");
    mockAxios.mockError(errorResponse);

    // eg. a user decided to leave the page
    unmount();

    expect(result.current[0]).toEqual({ ...resultState, isLoading: true });
  });
});
