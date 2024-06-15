import { FC } from "react";

import mapPropsToStyles from "../helpers/mapPropsToStyles";
import { ImageProps } from "./types";
import styles from "./Image.css";

const Image: FC<ImageProps> = (props) => {
  const { alt, src, width, height, ...restProps } = props;

  const classes = mapPropsToStyles(restProps, styles);
  return (
    <img alt={alt} className={classes} src={src} style={{ width, height }} />
  );
};

export default Image;
