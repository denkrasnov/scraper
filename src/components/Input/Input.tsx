import React, { FC } from "react";

import { InputProps } from "./types";
import styles from "./Input.css";

const Input: FC<InputProps> = props => {
  const { onChange, placeholder, value } = props;
  return (
    <input
      className={styles.Input}
      onChange={onChange}
      type="text"
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
