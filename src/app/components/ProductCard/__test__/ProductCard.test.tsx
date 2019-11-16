import React from "react";
import { shallow } from "enzyme";

import ProductCard from "..";

describe("ProductCard", () => {
  it("renders", () => {
    const product = { title: "__TITLE__", imageUrl: "__IMAGE_URL__" };
    const component = shallow(<ProductCard product={product} />);
    expect(component).toMatchSnapshot();
  });
});
