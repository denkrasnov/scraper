import React from "react";
import { shallow } from "enzyme";

import SearchBox from "..";

describe("SearchBox", () => {
  it("renders", () => {
    const component = shallow(<SearchBox />);
    expect(component).toMatchSnapshot();
  });
});
