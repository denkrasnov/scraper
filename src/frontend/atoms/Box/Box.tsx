import React, { forwardRef } from "react";

import mapPropsToStyles from "../helpers/mapPropsToStyles";
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

  const style: StyleType = {};

  if (width) style.width = width;
  if (height) style.height = height;
  if (minHeight) style.minHeight = minHeight;
  if (maxWidth) style.maxWidth = maxWidth;
  if (bottom) style.bottom = bottom;

  return (
    <div
      ref={ref}
      {...dataAttr}
      className={classes}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
});

Box.displayName = "Box";

export default Box;
