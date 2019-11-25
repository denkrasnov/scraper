import React from "react";
import { mount } from "enzyme";

import Button from "src/atoms/Buttons";
import * as AppContext from "src/services/ContextProvider";
import { INITIAL_STATE } from "src/services/fetchProducts/constants";
import SearchBar from "..";

describe("SearchBar", () => {
  beforeEach(() => {
    jest.resetModules();
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

    const button = component.find(Button);
    button.simulate("click");

    expect(dispatchMock).toHaveBeenCalledTimes(1);
  });
});
