import React, { FC } from "react";
import { Props } from "./types";

const Button: FC<Props> = props => {
  const { children, onClick } = props;
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
