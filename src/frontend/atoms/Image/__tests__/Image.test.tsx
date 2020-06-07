import React from "react";
import { shallow } from "enzyme";

import Image from "..";

describe("Button", () => {
  it("renders", () => {
    const component = shallow(
      <Image
        alt="__ALT__"
        height="100px"
        objectFit="cover"
        src="__SRC__"
        width="100px"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
