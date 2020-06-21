import React from "react";
import { shallow } from "enzyme";

import Grid from "../Grid";

describe("Grid", () => {
  const children = <div />;

  it("should render", () => {
    const component = shallow(<Grid>{children}</Grid>);

    expect(component).toMatchSnapshot();
  });
});
