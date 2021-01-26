import { useMediaQuery } from "react-responsive";

import isDesktop from "..";

jest.mock("react-responsive");

describe("isDesktop", () => {
  it("should return true", () => {
    (useMediaQuery as jest.Mock).mockReturnValueOnce(true);
    const result = isDesktop();
    expect(result).toBe(true);
  });

  it("should return false", () => {
    (useMediaQuery as jest.Mock).mockReturnValueOnce(false);
    const result = isDesktop();
    expect(result).toBe(false);
  });
});
