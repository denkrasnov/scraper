import React from "react";
import { shallow } from "enzyme";
import useInfiniteScroll from "infinite-scroll-react-hook";

import isDesktop from "~app/atoms/hooks/isDesktop";
import { Channel } from "../../../../backend/scrapers/types";
import ProductList from "..";

jest.mock("infinite-scroll-react-hook", () => jest.fn(() => [[], () => {}]));
jest.mock("~app/atoms/hooks/isDesktop", () => jest.fn(() => true));

describe("ProductCard", () => {
  const products = [
    {
      id: "__ID__",
      imageURL: "__IMAGE_URL__",
      date: "9:00",
      header: "__TITLE__",
      newsUrl: "__URL__",
      channel: Channel.TV8
    }
  ];
  (useInfiniteScroll as jest.Mock).mockReturnValue([products, () => {}]);

  it("should render", () => {
    const component = shallow(<ProductList products={products} />);
    expect(component).toMatchSnapshot();
  });

  it("should render when no products prop", () => {
    const component = shallow(<ProductList />);
    expect(component).toMatchSnapshot();
  });

  it("should render when mobile", () => {
    (isDesktop as jest.Mock).mockReturnValueOnce(false);
    const component = shallow(<ProductList products={products} />);

    expect(component).toMatchSnapshot();
  });
});
