import React, { FC } from "react";

import Box from "src/atoms/Box";
import Text from "src/atoms/Text";

const Header: FC = () => {
  return (
    <Box
      alignItems="center"
      backgroundColor="WHITE"
      height="60px"
      justifyContent="center"
    >
      <header>
        <Text color="MAIN_RED" fontSize="fs400" fontWeight="fw700">
          compare
        </Text>
      </header>
    </Box>
  );
};

export default Header;
