import { shallow } from "enzyme";

import Checkbox from "..";

describe("Checkbox", () => {
  it("should render", () => {
    const component = shallow(
      <Checkbox name="__TEST__" onChange={jest.fn()} value="__VALUE__" />
    );

    expect(component).toMatchSnapshot();
  });

  it("should render with label", () => {
    const component = shallow(
      <Checkbox
        label="__LABEL__"
        name="__TEST__"
        onChange={jest.fn()}
        value="__TEST__"
      />
    );

    expect(component).toMatchSnapshot();
  });

  it("should render styled", () => {
    const component = shallow(
      <Checkbox
        label="__LABEL__"
        name="__TEST__"
        onChange={jest.fn()}
        styled="TV8"
        value="__TEST__"
      />
    );

    expect(component).toMatchSnapshot();
  });
});
