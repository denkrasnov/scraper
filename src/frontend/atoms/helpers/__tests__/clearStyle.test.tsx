import { clearStyle } from "../clearStyle";

describe("clearStyle", () => {
  it("should return style object", () => {
    const styles = {
      width: "100px"
    };
    const result = clearStyle(styles);

    expect(result).toEqual(styles);
  });

  it("should remove properties with undefined values", () => {
    const styles = {
      width: "100px",
      height: undefined
    };
    const result = clearStyle(styles);

    expect(result).toEqual({ width: "100px" });
  });
});
