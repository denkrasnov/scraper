import React, { FC } from "react";

import { InputProps } from "./types";
import styles from "./Input.css";

const Input: FC<InputProps> = props => {
  const { onChange, placeholder, value } = props;
  return (
    <input
      className={styles.Input}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
};

export default Input;
