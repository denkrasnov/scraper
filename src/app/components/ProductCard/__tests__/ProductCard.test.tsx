import React from "react";
import { shallow } from "enzyme";

import ProductCard from "..";

describe("ProductCard", () => {
  it("should render", () => {
    const component = shallow(
      <ProductCard imageUrl="__IMAGE_URL__" title="__TITLE__" />
    );
    expect(component).toMatchSnapshot();
  });
});
