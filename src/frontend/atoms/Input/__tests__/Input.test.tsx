import { shallow } from "enzyme";

import Input from "..";

describe("Input", () => {
  it("should render", () => {
    const component = shallow(
      <Input name="__NAME__" placeholder="__PLACEHOLDER__" />
    );
    expect(component).toMatchSnapshot();
  });
});
