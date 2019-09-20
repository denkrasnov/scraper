import React, { FC } from "react";

import { TextProps, Sizes } from "./types";

const sizes: Sizes = {
  fs100: "10px",
  fs200: "12px",
  fs300: "14px",
  fs400: "16px",
  fs500: "18px",
  fs600: "20px",
  fs700: "22px",
  fs800: "24px",
  fs1000: "26px"
};

const Text: FC<TextProps> = props => {
  const { children, tag, fontSize, ...rest } = props;
  const Element = tag || "span";

  return (
    <Element style={{ fontSize: fontSize && sizes[fontSize], ...rest }}>
      {children}
    </Element>
  );
};

export default Text;
