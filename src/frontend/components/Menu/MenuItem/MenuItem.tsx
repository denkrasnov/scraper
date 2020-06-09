import React, { FC } from "react";

import Box from "~app/atoms/Box";
import Image from "~app/atoms/Image";
import { H3 } from "~app/atoms/Headings";
import { MenuItemProps } from "./types";

const MenuItem: FC<MenuItemProps> = (props) => {
  const { dataAttr, src, text, onClick } = props;

  return (
    <Box
      cursor="pointer"
      dataAttr={dataAttr}
      flexDirection="column"
      marginRight="s48"
      onClick={onClick}
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
