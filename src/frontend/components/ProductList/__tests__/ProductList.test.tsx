import React from "react";
import { shallow } from "enzyme";
import useInfiniteScroll from "infinite-scroll-react-hook";

import ProductList from "..";

jest.mock("infinite-scroll-react-hook", () => jest.fn(() => [[], () => {}]));

describe("ProductCard", () => {
  const products = [
    {
      imageURL: "__IMAGE_URL__",
      date: "9:00",
      header: "__TITLE__",
      newsUrl: "__URL__"
    }
  ];
  (useInfiniteScroll as jest.Mock).mockReturnValue([products, () => {}]);

  it("should render", () => {
    const component = shallow(<ProductList products={products} />);

    expect(component).toMatchSnapshot();
  });
});
