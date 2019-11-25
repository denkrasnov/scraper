import React, { FC } from "react";

import { GridProps } from "./types";
import styles from "./Grid.css";

const Grid: FC<GridProps> = props => {
  const { children, ...rest } = props;
  return (
    <div className={styles.Grid} style={{ ...rest }}>
      {children}
    </div>
  );
};

export default Grid;
