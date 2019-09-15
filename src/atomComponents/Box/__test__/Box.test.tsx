import React from "react";
import { shallow } from "enzyme";

import Box from "../Box";

describe("Box", () => {
  const children = <div />;
  it("renders", () => {
    const component = shallow(<Box>{children}</Box>);
    expect(component).toMatchSnapshot();
  });
});
