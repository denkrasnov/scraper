import React, { FC } from "react";

import mapPropsToStyles from "../helpers/mapPropsToStyles";
import { GridProps } from "./types";
import styles from "./Grid.css";

const Grid: FC<GridProps> = (props) => {
  const { children, ...restProps } = props;
  const classes = mapPropsToStyles(restProps, styles);

  return <div className={classes}>{children}</div>;
};

export default Grid;
