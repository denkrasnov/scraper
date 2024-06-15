import { FC } from "react";

import mapPropsToStyles from "../helpers/mapPropsToStyles";
import { CheckboxProps } from "./types";
import styles from "./Checkbox.css";
import Box from "../Box";

const Checkbox: FC<CheckboxProps> = (props) => {
  const { name, value, label, onChange, ...restProps } = props;
  const classes = mapPropsToStyles(restProps, styles);

  return (
    <label className={classes}>
      <input name={name} onChange={onChange} type="checkbox" value={value} />
      <Box alignItems="center">{label}</Box>
    </label>
  );
};

export default Checkbox;
