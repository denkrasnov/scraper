import React from "react";
import { shallow } from "enzyme";

import Loader from "..";

describe("Loader", () => {
  it("renders", () => {
    const component = shallow(<Loader />);

    expect(component).toMatchSnapshot();
  });
});
