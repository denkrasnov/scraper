import React, { FC } from "react";

import { CheckboxProps } from "./types";
import styles from "./Checkbox.css";
import Box from "../Box";

const Checkbox: FC<CheckboxProps> = (props) => {
  const { name, value, label, onChange } = props;

  return (
    <label className={styles.checkbox}>
      <input name={name} onChange={onChange} type="checkbox" value={value} />
      <Box alignItems="center">{label}</Box>
    </label>
  );
};

export default Checkbox;
