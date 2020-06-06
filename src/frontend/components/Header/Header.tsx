import React, { FC } from "react";

import Text from "~app/atoms/Text";
import Box from "~app/atoms/Box";

const Header: FC = () => {
  return (
    <header>
      <Box alignItems="center" height="60px" justifyContent="center">
        <Text color="MAIN_RED" fontSize="fs16" fontWeight="fw700">
          compare
        </Text>
      </Box>
    </header>
  );
};

export default Header;
