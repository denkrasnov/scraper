import React, { FC } from "react";

import { HeadingsProps } from "./types";

export const H1: FC<HeadingsProps> = props => {
  const { children } = props;

  return <h1>{children}</h1>;
};
