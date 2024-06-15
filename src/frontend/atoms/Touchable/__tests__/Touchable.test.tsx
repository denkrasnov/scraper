import { shallow } from "enzyme";

import Touchable from "..";

describe("Touchable", () => {
  it("should render", () => {
    const component = shallow(<Touchable>Children</Touchable>);

    expect(component).toMatchSnapshot();
  });

  it("should render with href", () => {
    const component = shallow(<Touchable href="__URL__">Children</Touchable>);

    expect(component).toMatchSnapshot();
  });

  it("should render with width", () => {
    const component = shallow(<Touchable width="100%">Children</Touchable>);

    expect(component).toMatchSnapshot();
  });
});
