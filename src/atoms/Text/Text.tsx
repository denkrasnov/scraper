import React, { FC } from "react";

import colors from "../Colors";
import { StyleType } from "../helpers/types";
import { sizes, weights } from "./fonts";
import { TextProps } from "./types";

const Text: FC<TextProps> = props => {
  const { children, color, tag, fontSize, fontWeight, ...rest } = props;
  const Element = tag || "span";

  const style: StyleType = {};

  if (fontSize) style.fontSize = sizes[fontSize];
  if (fontWeight) style.fontWeight = weights[fontWeight];
  if (color) style.color = colors[color];

  return <Element style={{ ...style, ...rest }}>{children}</Element>;
};

export default Text;
