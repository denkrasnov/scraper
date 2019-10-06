import React from "react";
import { shallow } from "enzyme";

import ProductCard from "..";

describe("ProductCard", () => {
  it("renders", () => {
    const component = shallow(<ProductCard />);
    expect(component).toMatchSnapshot();
  });
});
