import React from "react";
import { shallow } from "enzyme";

import Checkbox from "~app/atoms/Checkbox";
import isDesktop from "~app/atoms/hooks/isDesktop";
// TODO: created shared types with /backend
import { ProductName, Channel } from "../../../../backend/scrapers/types";
import useFilter from "../hooks/useFilter";
import Filter from "..";

jest.mock("../hooks/useFilter", () => jest.fn(() => [[], jest.fn()]));
jest.mock("~app/atoms/hooks/isDesktop", () => jest.fn(() => true));

describe("Filter", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const news = [
    {
      imageURL: "__IMAGE_URL__",
      date: "9:00",
      header: "__TITLE__",
      newsUrl: "__URL__",
      channel: Channel.TV8
    }
  ];

  it("should render", () => {
    const component = shallow(
      <Filter
        items={news}
        options={[Channel.TV8, Channel.NTV]}
        productName={ProductName.MD}
      >
        <div />
      </Filter>
    );
    expect(component).toMatchSnapshot();
  });

  it("should render when mobile", () => {
    (isDesktop as jest.Mock).mockReturnValueOnce(false);
    const component = shallow(
      <Filter
        items={news}
        options={[Channel.TV8, Channel.NTV]}
        productName={ProductName.MD}
      >
        <div />
      </Filter>
    );
    expect(component).toMatchSnapshot();
  });

  it("should call filter", () => {
    const filterMock = jest.fn();
    (useFilter as jest.Mock).mockReturnValueOnce([[], filterMock]);
    const component = shallow(
      <Filter
        items={news}
        options={[Channel.TV8, Channel.NTV]}
        productName={ProductName.MD}
      >
        <div />
      </Filter>
    );

    component
      .find(Checkbox)
      .at(0)
      .simulate("change", { target: { checked: true, value: "TV8" } });
    expect(filterMock).toHaveBeenCalled();
    expect(filterMock).toHaveBeenCalledWith(true, "TV8", "channel");
  });
});
