import React, { FC } from "react";

import { ImageProps } from "./types";

const Image: FC<ImageProps> = props => {
  const { alt, objectFit, src } = props;

  return <img alt={alt} src={src} style={{ objectFit }} />;
};

export default Image;
