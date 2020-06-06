import React, { FC } from "react";

import mapPropsToStyles from "../helpers/mapPropsToStyles";
import { StyleType } from "../types";
import { BoxProps } from "./types";
import styles from "./Box.css";

const Box: FC<BoxProps> = (props) => {
  const {
    children,
    onClick,
    width,
    height,
    minHeight,
    maxWidth,
    ...restProps
  } = props;

  const classes = mapPropsToStyles(restProps, styles);

  const style: StyleType = {};

  if (width) style.width = width;
  if (height) style.height = height;
  if (minHeight) style.minHeight = minHeight;
  if (maxWidth) style.maxWidth = maxWidth;

  return (
    <div className={classes} onClick={onClick} style={style}>
      {children}
    </div>
  );
};

export default Box;
