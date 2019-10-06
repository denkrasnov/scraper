import React from "react";
import { shallow } from "enzyme";

import Image from "..";

describe("Button", () => {
  it("renders", () => {
    const component = shallow(<Image alt="__ALT__" src="__SRC__" />);
    expect(component).toMatchSnapshot();
  });
});
