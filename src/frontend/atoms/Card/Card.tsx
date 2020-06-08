import React, { FC } from "react";

import mapPropsToStyles from "../helpers/mapPropsToStyles";
import { CardProps } from "./types";
import styles from "./Card.css";

const Card: FC<CardProps> = (props) => {
  const { children, href, ...restProps } = props;
  const classes = mapPropsToStyles(restProps, styles);

  return (
    <a
      className={styles.link}
      href={href || "#"}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className={classes}>{children}</div>
    </a>
  );
};

export default Card;
