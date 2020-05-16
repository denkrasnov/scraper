import React from "react";
import { shallow } from "enzyme";

import Menu from "..";

describe("Menu", () => {
  it("should render", () => {
    const component = shallow(<Menu />);

    expect(component).toMatchSnapshot();
  });
});
