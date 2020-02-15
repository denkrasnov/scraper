import React from "react";
import { shallow } from "enzyme";

import Box from "../Box";

describe("Box", () => {
  const children = <div />;

  it("should render", () => {
    const component = shallow(<Box>{children}</Box>);
    expect(component).toMatchSnapshot();
  });

  it("should render with attributes", () => {
    const component = shallow(
      <Box backgroundColor="BACKGROUND">{children}</Box>
    );
    expect(component).toMatchSnapshot();
  });
});
