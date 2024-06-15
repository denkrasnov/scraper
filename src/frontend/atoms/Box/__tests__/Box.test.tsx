import { shallow } from "enzyme";

import Box from "../Box";

describe("Box", () => {
  const children = <div />;

  it("should render", () => {
    const component = shallow(<Box>{children}</Box>);
    expect(component).toMatchSnapshot();
  });

  it("should render with attributes", () => {
    const component = shallow(
      <Box
        background="BACKGROUND"
        bottom="10px"
        height="10px"
        maxWidth="10px"
        minHeight="10px"
        width="10px"
      >
        {children}
      </Box>
    );
    expect(component).toMatchSnapshot();
  });
});
