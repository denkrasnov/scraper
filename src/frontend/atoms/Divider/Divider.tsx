import { FC } from "react";

import mapPropsToStyles from "../helpers/mapPropsToStyles";
import { DividerProps } from "./types";
import styles from "./Divider.css";

const Divider: FC<DividerProps> = (props) => {
  const classes = mapPropsToStyles(props, styles);

  return <div className={classes} />;
};

export default Divider;
