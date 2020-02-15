import React from "react";
import { shallow } from "enzyme";

import Card from "..";

describe("Card", () => {
  it("should render", () => {
    const component = shallow(<Card>Something to display</Card>);

    expect(component).toMatchSnapshot();
  });
});
