import React, { FC } from "react";

import { sizes, weights } from "./fonts";
import { TextProps, Sizes, Weights } from "./types";

const Text: FC<TextProps> = props => {
  const { children, tag, fontSize, fontWeight, ...rest } = props;
  const Element = tag || "span";

  const style: { [key: string]: string | number } = {};

  if (fontSize) style.fontSize = sizes[fontSize];
  if (fontWeight) style.fontWeight = weights[fontWeight];

  return <Element style={{ ...style, ...rest }}>{children}</Element>;
};

export default Text;
