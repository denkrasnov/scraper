import colors from "..";

describe("colors", () => {
  it("should render", () => {
    expect(colors).toMatchSnapshot();
  });
});
