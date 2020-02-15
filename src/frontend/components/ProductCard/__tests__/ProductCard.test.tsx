import React from "react";
import { shallow } from "enzyme";

import ProductCard from "..";

describe("ProductCard", () => {
  it("should render", () => {
    const component = shallow(
      <ProductCard imageUrl="__IMAGE_URL__" price="100" title="__TITLE__" />
    );
    expect(component).toMatchSnapshot();
  });

  it("should render with alternative product", () => {
    const component = shallow(
      <ProductCard
        imageUrl="__IMAGE_URL__"
        noImage
        price="100"
        title="__TITLE__"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
