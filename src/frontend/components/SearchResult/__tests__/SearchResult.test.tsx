import React from "react";
import { shallow } from "enzyme";

import * as AppContext from "~app/services/ContextProvider";
import { INITIAL_STATE } from "~app/services/fetchProducts/constants";
import SearchResult from "..";

describe("SearchResult", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render products", () => {
    jest.spyOn(AppContext, "useFullContext").mockImplementationOnce(() => [
      {
        ...INITIAL_STATE,
        products: [
          {
            id: "__ID__",
            title: "__TITLE__",
            imageUrl: "__IMAGE_URL__",
            price: "100",
            shop: "__SHOP__"
          }
        ]
      },
      () => {}
    ]);
    const component = shallow(<SearchResult />);

    expect(component).toMatchSnapshot();
  });

  it("should render Loading", () => {
    jest.spyOn(AppContext, "useFullContext").mockImplementationOnce(() => [
      {
        ...INITIAL_STATE,
        isLoading: true
      },
      () => {}
    ]);

    const component = shallow(<SearchResult />);
    expect(component).toMatchSnapshot();
  });

  it("should render Error", () => {
    jest.spyOn(AppContext, "useFullContext").mockImplementationOnce(() => [
      {
        ...INITIAL_STATE,
        isError: "SomeError"
      },
      () => {}
    ]);
    const component = shallow(<SearchResult />);

    expect(component).toMatchSnapshot();
  });
});
