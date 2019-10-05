import React from "react";
import { shallow } from "enzyme";

import Home from "..";

describe("Home", () => {
  it("renders", () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });
});
