import colors from "..";

describe("colors", () => {
  it("renders", () => {
    expect(colors).toMatchSnapshot();
  });
});
