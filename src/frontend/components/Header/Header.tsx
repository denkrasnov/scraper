import React, { FC } from "react";

import Text from "~app/atoms/Text";
import Box from "~app/atoms/Box";

const Header: FC = () => {
  return (
    <Box
      alignItems="center"
      dataAttr={{ "data-e2e-id": "header" }}
      height="60px"
      justifyContent="center"
    >
      <Text color="MAIN_RED" fontSize="fs16" fontWeight="fw700">
        newsfeed
      </Text>
    </Box>
  );
};

export default Header;
