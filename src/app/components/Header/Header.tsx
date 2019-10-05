import React, { FC } from "react";

import Box from "../../../components/Box";
import Text from "../../../components/Text";

const Header: FC = () => {
  return (
    <Box alignItems="center" height="60px">
      <header>
        <Text color="MAIN_RED" fontSize="fs400" fontWeight="fw700">
          compare
        </Text>
      </header>
    </Box>
  );
};

export default Header;
