import React from "react";
import { shallow } from "enzyme";

import Input from "..";

describe("Input", () => {
  it("renders", () => {
    const component = shallow(<Input placeholder="__PLACEHOLDER__" />);
    expect(component).toMatchSnapshot();
  });
});
