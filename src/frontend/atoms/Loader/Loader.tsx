import React, { FC } from "react";

import styles from "./Loader.css";

const Loader: FC = () => {
  return (
    <div className={styles["lds-roller"]}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Loader;
