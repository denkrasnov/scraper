import React, { FC } from "react";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = props => {
  const { children, onClick } = props;
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
