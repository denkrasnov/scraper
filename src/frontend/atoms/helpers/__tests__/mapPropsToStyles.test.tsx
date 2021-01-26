import mapPropsToStyles from "../mapPropsToStyles";

describe("mapPropsToStyles", () => {
  const styles = {
    marginClass: "marginClass",
    "marginTopClass-s12": "margin-topClass"
  };

  it("should return class when prop is boolean", () => {
    const result = mapPropsToStyles({ marginClass: true }, styles);

    expect(result).toBe(styles.marginClass);
  });

  it("should return class when prop is boolean false", () => {
    const result = mapPropsToStyles({ marginClass: false }, styles);

    expect(result).toBe("");
  });

  it("should return class when prop is string", () => {
    const result = mapPropsToStyles({ marginTopClass: "s12" }, styles);

    expect(result).toBe(styles["marginTopClass-s12"]);
  });

  it("should return when prop doesnt match existing selector", () => {
    const result = mapPropsToStyles({ foo: "s12" }, styles);

    expect(result).toBe("");
  });

  it("should return when prop doesnt match existing selector and styles have root selector", () => {
    const withRoot = { root: "rootClass", ...styles };
    const result = mapPropsToStyles({ foo: "s12" }, withRoot);

    expect(result).toBe(withRoot.root);
  });

  it("should return when prop is undefined", () => {
    const result = mapPropsToStyles({ foo: undefined }, styles);

    expect(result).toBe("");
  });

  it("should throw Error", () => {
    expect(() => {
      mapPropsToStyles({ foo: [] }, styles);
    }).toThrow();
  });
});
