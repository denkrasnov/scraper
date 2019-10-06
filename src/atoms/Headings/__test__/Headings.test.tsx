import React from "react";
import { shallow } from "enzyme";

import { H1, H2, H3, H4, H5, H6 } from "..";

describe("Headings", () => {
  const children = "__CHILDREN__";

  it("renders H1", () => {
    const component = shallow(<H1>{children}</H1>);
    expect(component).toMatchSnapshot();
  });

  it("renders H2", () => {
    const component = shallow(<H2>{children}</H2>);
    expect(component).toMatchSnapshot();
  });

  it("renders H3", () => {
    const component = shallow(<H3>{children}</H3>);
    expect(component).toMatchSnapshot();
  });

  it("renders H4", () => {
    const component = shallow(<H4>{children}</H4>);
    expect(component).toMatchSnapshot();
  });

  it("renders H5", () => {
    const component = shallow(<H5>{children}</H5>);
    expect(component).toMatchSnapshot();
  });

  it("renders H6", () => {
    const component = shallow(<H6>{children}</H6>);
    expect(component).toMatchSnapshot();
  });
});
