import React, { FC } from "react";

import { ImageProps } from "./types";
import styles from "./Image.css";

const Image: FC<ImageProps> = props => {
  const { alt, objectFit, src } = props;

  return (
    <img
      alt={alt}
      className={styles.Image}
      src={src}
      style={{ objectFit }}
      width="100%"
    />
  );
};

export default Image;
