import React from "react";
import { shallow } from "enzyme";

import MenuItem from "..";

describe("MenuItem", () => {
  it("should render", () => {
    const component = shallow(<MenuItem src="/__SRC__" text="__TEXT__" />);

    expect(component).toMatchSnapshot();
  });
});
