import React, { FC } from "react";

import { HeadingsProps } from "./types";

export const H4: FC<HeadingsProps> = (props) => {
  const { children } = props;

  return <h4>{children}</h4>;
};
