import React, { FC } from "react";

import { ButtonProps } from "./types";
import styles from "./Button.css";

const Button: FC<ButtonProps> = props => {
  const { disabled, children, onClick, type = "button" } = props;
  return (
    <button
      className={styles.Button}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
