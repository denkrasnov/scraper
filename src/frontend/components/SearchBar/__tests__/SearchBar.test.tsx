import React from "react";
import { mount } from "enzyme";

import * as AppContext from "~app/services/ContextProvider";
import { INITIAL_STATE } from "~app/services/fetchProducts/constants";
import SearchBar from "..";

describe("SearchBar", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render", () => {
    jest
      .spyOn(AppContext, "useFullContext")
      .mockImplementation(() => [INITIAL_STATE, () => {}]);

    const component = mount(<SearchBar />);

    expect(component).toMatchSnapshot();
  });

  it("should submit the Form", () => {
    const dispatchMock = jest.fn();
    jest
      .spyOn(AppContext, "useFullContext")
      .mockImplementation(() => [INITIAL_STATE, dispatchMock]);

    const component = mount(<SearchBar />);

    const search = component.find("input[name='search']");
    ((search.instance() as unknown) as HTMLInputElement).value = "query";
    search.simulate("change", search);

    expect(component).toMatchSnapshot();

    component.find("form").simulate("submit");

    expect(dispatchMock).toHaveBeenCalledTimes(1);
  });
});
