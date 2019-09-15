import React, { FC } from "react";

import { HeaderProps } from "./types";
import styles from "./Header.css";

const Header: FC<HeaderProps> = props => {
  const { text } = props;
  return (
    <header className={styles.header}>
      <h1>{text}</h1>
    </header>
  );
};

export default Header;
