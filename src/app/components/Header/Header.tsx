import React, { FC } from "react";

import Box from "src/atoms/Box";
import Text from "src/atoms/Text";

const Header: FC = () => {
  return (
    <header>
      <Box
        alignItems="center"
        backgroundColor="WHITE"
        height="60px"
        justifyContent="center"
      >
        <Text color="MAIN_RED" fontSize="fs400" fontWeight="fw700">
          compare
        </Text>
      </Box>
    </header>
  );
};

export default Header;
