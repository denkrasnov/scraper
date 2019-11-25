import React from "react";
import { shallow } from "enzyme";
import { renderHook, cleanup } from "@testing-library/react-hooks";

import { INITIAL_STATE } from "../fetchProducts/constants";
import ContextProvider, { useFullContext } from "../ContextProvider";

describe("ContextProvider", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render", () => {
    const children = <div />;
    const component = shallow(<ContextProvider>{children}</ContextProvider>);

    expect(component).toMatchSnapshot();
  });

  describe("useFullContext", () => {
    it("should return", () => {
      const { result } = renderHook(() => useFullContext());
      expect(result.current).toEqual(
        expect.arrayContaining([INITIAL_STATE, expect.any(Function)])
      );
    });
  });
});
