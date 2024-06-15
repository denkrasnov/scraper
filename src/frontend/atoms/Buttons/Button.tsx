import { FC } from "react";

import mapPropsToStyles from "../helpers/mapPropsToStyles";
import { ButtonProps } from "./types";
import styles from "./Button.css";

const Button: FC<ButtonProps> = (props) => {
  const { disabled, children, onClick, type = "button", ...restProps } = props;
  const classes = mapPropsToStyles(restProps, styles);

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
