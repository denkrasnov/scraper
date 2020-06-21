import React from "react";
import { shallow } from "enzyme";

import Home from "..";

describe("Home", () => {
  it("should render", () => {
    const component = shallow(<Home />);

    expect(component).toMatchSnapshot();
  });
});
