import React, { FC } from "react";

import { BoxProps } from "./type";
import styles from "./Box.css";

const Box: FC<BoxProps> = props => {
  const { children, ...rest } = props;
  return (
    <div className={styles.Box} style={{ ...rest }}>
      {children}
    </div>
  );
};

export default Box;
