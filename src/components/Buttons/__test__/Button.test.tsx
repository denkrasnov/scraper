import React from "react";
import { shallow } from "enzyme";

import Button from "..";

describe("Button", () => {
  const children = "__BUTTON_NAME__";
  it("renders", () => {
    const component = shallow(<Button>{children}</Button>);
    expect(component).toMatchSnapshot();
  });
});
