import React from "react";
import { shallow } from "enzyme";

import Text from "..";

describe("Text", () => {
  const children = "__TEXT__";
  it("should render", () => {
    const component = shallow(<Text>{children}</Text>);

    expect(component).toMatchSnapshot();
  });

  it("should render with fontSize and fontWeight", () => {
    const component = shallow(
      <Text fontSize="fs100" fontWeight="fw400">
        {children}
      </Text>
    );

    expect(component).toMatchSnapshot();
  });
});
