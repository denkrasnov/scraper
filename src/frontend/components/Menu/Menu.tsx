import React from "react";

import Box from "~app/atoms/Box";
import { image } from "~app/assets";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <Box justifyContent="center" width="100%">
      <MenuItem src={image.tv} text="Televisions" />
      <MenuItem src={image.fridge} text="Refrigerators" />
    </Box>
  );
};

export default Menu;
