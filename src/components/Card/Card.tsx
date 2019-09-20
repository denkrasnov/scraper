import React, { FC } from "react";

import { CardProps } from "./types";

import styles from "./Card.css";

const Card: FC<CardProps> = props => {
  const { children } = props;

  return <div className={styles.Card}>{children}</div>;
};

export default Card;
