import { colors } from "../colors";

describe("colors", () => {
  it("should render", () => {
    expect(colors).toMatchSnapshot();
  });
});
