import React from "react";
import { shallow } from "enzyme";

import Divider from "..";

describe("Divider", () => {
  it("should render", () => {
    const component = shallow(<Divider />);

    expect(component).toMatchSnapshot();
  });

  it("should render in a vertical position", () => {
    const component = shallow(<Divider vertical />);

    expect(component).toMatchSnapshot();
  });
});
