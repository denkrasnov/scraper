import React from "react";
import { shallow } from "enzyme";

import * as AppContext from "~app/services/ContextProvider";
import { INITIAL_STATE } from "~app/services/fetchProducts/constants";
import MenuItem from "../MenuItem";
import Menu from "..";

describe("Menu", () => {
  it("should render", () => {
    jest
      .spyOn(AppContext, "useFullContext")
      .mockImplementation(() => [INITIAL_STATE, () => {}]);

    const component = shallow(<Menu />);

    expect(component).toMatchSnapshot();
  });

  it("should call onClick and dispatch", () => {
    const dispatchMock = jest.fn();
    jest
      .spyOn(AppContext, "useFullContext")
      .mockImplementation(() => [INITIAL_STATE, dispatchMock]);

    const component = shallow(<Menu />);

    component.find(MenuItem).at(0).simulate("click");
    expect(dispatchMock).toHaveBeenCalledTimes(1);
  });

  it("should call onClick and dispatch on second MenuItem", () => {
    const dispatchMock = jest.fn();
    jest
      .spyOn(AppContext, "useFullContext")
      .mockImplementation(() => [INITIAL_STATE, dispatchMock]);

    const component = shallow(<Menu />);

    component.find(MenuItem).at(1).simulate("click");
    expect(dispatchMock).toHaveBeenCalledTimes(1);
  });
});
