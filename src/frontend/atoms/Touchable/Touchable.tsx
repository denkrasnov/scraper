import { FC } from "react";

import { clearStyle } from "../helpers/clearStyle";
import mapPropsToStyles from "../helpers/mapPropsToStyles";
import { TouchableProps } from "./types";
import styles from "./Touchable.css";
import { StyleType } from "../types";
import Box from "../Box";

const Touchable: FC<TouchableProps> = (props) => {
  const { children, href, dataAttr, width, ...restProps } = props;
  const classes = mapPropsToStyles(restProps, styles);

  const style: StyleType = { width };

  return href ? (
    <a
      className={classes}
      href={href}
      rel="noopener noreferrer"
      style={clearStyle(style)}
      target="_blank"
      {...dataAttr}
    >
      {children}
    </a>
  ) : (
    <Box className={classes}>{children}</Box>
  );
};

export default Touchable;
