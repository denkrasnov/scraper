import React from "react";
import { shallow } from "enzyme";

import Input from "..";

describe("Input", () => {
  it("renders", () => {
    const component = shallow(
      <Input name="__NAME__" placeholder="__PLACEHOLDER__" />
    );
    expect(component).toMatchSnapshot();
  });
});
