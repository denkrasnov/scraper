import React, { FC } from "react";

import { HeadingsProps } from "./types";

export const H5: FC<HeadingsProps> = props => {
  const { children } = props;

  return <h5>{children}</h5>;
};
