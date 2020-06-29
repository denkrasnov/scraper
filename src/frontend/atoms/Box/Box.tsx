import React, { forwardRef } from "react";

import mapPropsToStyles from "../helpers/mapPropsToStyles";
import { clearStyle } from "../helpers/clearStyle";
import { StyleType } from "../types";
import { BoxProps } from "./types";
import styles from "./Box.css";

const Box = forwardRef((props: BoxProps, ref: React.Ref<HTMLDivElement>) => {
  const {
    bottom,
    children,
    onClick,
    width,
    height,
    minHeight,
    maxWidth,
    dataAttr,
    ...restProps
  } = props;

  const classes = mapPropsToStyles(restProps, styles);

  const style: StyleType = { width, height, minHeight, maxWidth, bottom };

  return (
    <div
      ref={ref}
      {...dataAttr}
      className={classes}
      onClick={onClick}
      style={clearStyle(style)}
    >
      {children}
    </div>
  );
});

Box.displayName = "Box";

export default Box;
