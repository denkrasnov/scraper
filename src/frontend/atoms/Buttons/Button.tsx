import React, { FC } from "react";

import { ButtonProps } from "./types";
import styles from "./Button.css";

const Button: FC<ButtonProps> = (props) => {
  const {
    disabled,
    children,
    onClick,
    type = "button",
    transparent,
    ...rest
  } = props;
  return (
    <button
      className={transparent ? styles.transparent : styles.Button}
      disabled={disabled}
      onClick={onClick}
      style={{ ...rest }}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
