import React, { FC } from "react";

import { CheckboxProps } from "./types";
import styles from "./Checkbox.css";

const Checkbox: FC<CheckboxProps> = (props) => {
  const { name, value, label, onChange } = props;

  return (
    <label className={styles.checkbox}>
      <input name={name} onChange={onChange} type="checkbox" value={value} />
      <div>{label}</div>
    </label>
  );
};

export default Checkbox;
