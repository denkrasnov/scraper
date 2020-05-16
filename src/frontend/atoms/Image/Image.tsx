import React, { FC } from "react";

import { ImageProps } from "./types";
import styles from "./Image.css";

const Image: FC<ImageProps> = (props) => {
  const { alt, borderRadiusLeft, objectFit, src, width, height } = props;

  return (
    <img
      alt={alt}
      className={borderRadiusLeft ? styles.borderRadiusLeft : styles.Image}
      src={src}
      style={{ objectFit, width, height }}
      width="100%"
    />
  );
};

export default Image;
