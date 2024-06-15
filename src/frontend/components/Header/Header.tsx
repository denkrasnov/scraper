import { FC } from "react";

import Divider from "~app/atoms/Divider";
import Text from "~app/atoms/Text";
import Box from "~app/atoms/Box";

const Header: FC = () => (
  <Box display="block" gridArea="header" position="sticky" top="0">
    <Box
      alignItems="center"
      background="WHITE"
      dataAttr={{ "data-e2e-id": "header" }}
      height="60px"
      justifyContent="center"
      width="100%"
    >
      <Text color="MAIN_RED" fontSize="fs16" fontWeight="fw700">
        newsfeed
      </Text>
    </Box>
    <Divider />
  </Box>
);

export default Header;
