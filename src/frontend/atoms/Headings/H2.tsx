import React, { FC } from "react";

import { HeadingsProps } from "./types";

export const H2: FC<HeadingsProps> = props => {
  const { children } = props;

  return <h2>{children}</h2>;
};
