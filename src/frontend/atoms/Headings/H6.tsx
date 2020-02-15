import React, { FC } from "react";

import { HeadingsProps } from "./types";

export const H6: FC<HeadingsProps> = props => {
  const { children } = props;

  return <h6>{children}</h6>;
};
