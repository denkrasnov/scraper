import { forwardRef } from "react";
import * as React from "react";
import cn from "classnames";

import mapPropsToStyles from "../helpers/mapPropsToStyles";
import { clearStyle } from "../helpers/clearStyle";
import { StyleType } from "../types";
import { BoxProps } from "./types";
import styles from "./Box.css";

const Box = forwardRef((props: BoxProps, ref: React.Ref<HTMLDivElement>) => {
  const {
    bottom,
    top,
    children,
    onClick,
    width,
    height,
    minHeight,
    maxWidth,
    dataAttr,
    className,
    ...restProps
  } = props;

  const classes = mapPropsToStyles(restProps, styles);

  const style: StyleType = { width, height, minHeight, maxWidth, bottom, top };

  return (
    <div
      ref={ref}
      {...dataAttr}
      className={cn(classes, className)}
      onClick={onClick}
      style={clearStyle(style)}
    >
      {children}
    </div>
  );
});

Box.displayName = "Box";

export default Box;
