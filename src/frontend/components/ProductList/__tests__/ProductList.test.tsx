import React from "react";
import { shallow } from "enzyme";
import useInfiniteScroll from "infinite-scroll-react-hook";

import ProductList from "..";

jest.mock("infinite-scroll-react-hook", () => jest.fn(() => [[], () => {}]));

describe("ProductCard", () => {
  const products = [
    {
      id: "id",
      imageUrl: "__IMAGE_URL__",
      price: "100",
      shop: "__SHOP__",
      title: "__TITLE__",
      productUrl: "__URL__"
    }
  ];
  (useInfiniteScroll as jest.Mock).mockReturnValue([products, () => {}]);

  it("should render", () => {
    const component = shallow(<ProductList products={products} />);

    expect(component).toMatchSnapshot();
  });
});
