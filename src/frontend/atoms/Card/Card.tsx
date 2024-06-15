import { FC } from "react";

import mapPropsToStyles from "../helpers/mapPropsToStyles";
import { CardProps } from "./types";
import styles from "./Card.css";

const Card: FC<CardProps> = (props) => {
  const { children, ...restProps } = props;
  const classes = mapPropsToStyles(restProps, styles);

  return <div className={classes}>{children}</div>;
};

export default Card;
