import { FC } from "react";

import mapPropsToStyles from "../helpers/mapPropsToStyles";
import styles from "./Text.css";
import { TextProps } from "./types";

const Text: FC<TextProps> = (props) => {
  const { children, tag, ...restProps } = props;
  const Element = tag || "span";

  const classes = mapPropsToStyles(restProps, styles);

  return <Element className={classes}>{children}</Element>;
};

export default Text;
