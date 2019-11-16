import React, { FC } from "react";

import { DividerProps } from "./types";
import styles from "./Divider.css";

const Divider: FC<DividerProps> = props => {
  const { vertical } = props;

  return <div className={vertical ? styles.vertical : styles.Divider} />;
};

export default Divider;
