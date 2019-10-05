import React from "react";
import { shallow } from "enzyme";

import Box from "../Box";

describe("Box", () => {
  const children = <div />;
  it("renders", () => {
    const component = shallow(<Box>{children}</Box>);
    expect(component).toMatchSnapshot();
  });
  it("renders with attributes", () => {
    const component = shallow(
      <Box backgroundColor="BACKGROUND">{children}</Box>
    );
    expect(component).toMatchSnapshot();
  });
});
