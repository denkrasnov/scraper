import React from "react";
import { shallow } from "enzyme";

import * as AppContext from "~app/services/ContextProvider";
import { INITIAL_STATE } from "~app/services/fetchProducts/constants";
import { ProductName } from "../../../../backend/scrapers/types";
import SearchResult from "..";

describe("SearchResult", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render products", () => {
    jest.spyOn(AppContext, "useFullContext").mockImplementationOnce(() => [
      {
        ...INITIAL_STATE,
        products: {
          name: ProductName.TV,
          items: [
            {
              imageURL: "__IMAGE_URL__",
              date: "9:00",
              header: "__TITLE__",
              newsUrl: "__URL__"
            }
          ]
        }
      },
      () => {}
    ]);
    const component = shallow(<SearchResult />);

    expect(component).toMatchSnapshot();
  });

  it("should render null when products not present", () => {
    jest.spyOn(AppContext, "useFullContext").mockImplementationOnce(() => [
      {
        ...INITIAL_STATE,
        products: null
      },
      () => {}
    ]);
    const component = shallow(<SearchResult />);

    expect(component).toMatchSnapshot();
  });

  it("should render null when items is empty", () => {
    jest.spyOn(AppContext, "useFullContext").mockImplementationOnce(() => [
      {
        ...INITIAL_STATE,
        products: { name: ProductName.TV, items: [] }
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
