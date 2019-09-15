import React from "react";
import { shallow } from "enzyme";

import Text from "..";

describe("Text", () => {
  const children = "__TEXT__";
  it("renders", () => {
    const component = shallow(<Text>{children}</Text>);
    expect(component).toMatchSnapshot();
  });
});
