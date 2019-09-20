import React, { FC } from "react";

import { ButtonProps } from "./types";
import styles from "./Button.css";

const Button: FC<ButtonProps> = props => {
  const { disabled, children, onClick } = props;
  return (
    <button
      className={styles.Button}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
