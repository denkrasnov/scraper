import { FC } from "react";

import Text from "~app/atoms/Text";
import Box from "~app/atoms/Box";

const Header: FC = () => (
  <Box
    background="BACKGROUND"
    display="block"
    gridArea="header"
    position="sticky"
    top="0"
  >
    <Box
      alignItems="center"
      dataAttr={{ "data-e2e-id": "header" }}
      height="60px"
      justifyContent="center"
      width="100%"
    >
      <Text color="BUTTON" fontSize="fs16" fontWeight="fw700">
        Hope
      </Text>
    </Box>
  </Box>
);

export default Header;
