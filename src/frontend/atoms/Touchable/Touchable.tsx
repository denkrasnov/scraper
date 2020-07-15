import React, { FC } from "react";

import mapPropsToStyles from "../helpers/mapPropsToStyles";
import { TouchableProps } from "./types";
import styles from "./Touchable.css";

const Touchable: FC<TouchableProps> = (props) => {
  const { children, href, dataAttr, ...restProps } = props;
  const classes = mapPropsToStyles(restProps, styles);

  return (
    <a
      className={classes}
      href={href || "#"}
      rel="noopener noreferrer"
      target="_blank"
      {...dataAttr}
    >
      {children}
    </a>
  );
};

export default Touchable;
