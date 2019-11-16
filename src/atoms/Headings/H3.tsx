import React, { FC } from "react";

import { HeadingsProps } from "./types";

export const H3: FC<HeadingsProps> = props => {
  const { children } = props;

  return <h3>{children}</h3>;
};
