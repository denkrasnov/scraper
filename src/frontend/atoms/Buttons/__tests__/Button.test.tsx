import React from "react";
import { shallow } from "enzyme";

import Button from "..";

describe("Button", () => {
  const children = "__BUTTON_NAME__";
  it("should render", () => {
    const component = shallow(<Button>{children}</Button>);

    expect(component).toMatchSnapshot();
  });

  it("should render with transparent", () => {
    const component = shallow(<Button transparent>{children}</Button>);

    expect(component).toMatchSnapshot();
  });
});
