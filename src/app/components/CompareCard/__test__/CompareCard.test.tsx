import React from "react";
import { shallow } from "enzyme";

import CompareCard from "..";

describe("CompareCard", () => {
  it("renders", () => {
    const component = shallow(<CompareCard />);
    expect(component).toMatchSnapshot();
  });
});
