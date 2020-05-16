import React, { FC } from "react";

import Box from "~app/atoms/Box";
import Image from "~app/atoms/Image";
import { H3 } from "~app/atoms/Headings";
import { MenuItemProps } from "./types";

const MenuItem: FC<MenuItemProps> = (props) => {
  const { src, text } = props;

  return (
    <Box
      cursor="pointer"
      flexDirection="column"
      marginRight="60px"
      width="200px"
    >
      <Image alt="menu-image" height="134px" src={src} />
      <Box justifyContent="center" width="100%">
        <H3>{text}</H3>
      </Box>
    </Box>
  );
};

export default MenuItem;
