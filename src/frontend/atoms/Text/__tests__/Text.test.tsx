import React from "react";
import { shallow } from "enzyme";

import Text from "..";

describe("Text", () => {
  const children = "__TEXT__";

  it("should render", () => {
    const component = shallow(<Text>{children}</Text>);

    expect(component).toMatchSnapshot();
  });

  it("should render with attributes", () => {
    const component = shallow(
      <Text color="BODY_TEXT" fontSize="fs10" fontWeight="fw400">
        {children}
      </Text>
    );

    expect(component).toMatchSnapshot();
  });
});
