import React, { FC } from "react";

import colors from "../Colors";
import { StyleType } from "../helpers/types";
import { BoxProps } from "./types";
import styles from "./Box.css";

const Box: FC<BoxProps> = (props) => {
  const { backgroundColor, children, ...rest } = props;
  const style: StyleType = {};

  if (backgroundColor) style.backgroundColor = colors[backgroundColor];

  return (
    <div className={styles.Box} style={{ ...style, ...rest }}>
      {children}
    </div>
  );
};

export default Box;
