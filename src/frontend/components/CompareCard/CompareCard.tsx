import React, { FC } from "react";

import Image from "~app/atoms/Image";
import Card from "~app/atoms/Card";
import Box from "~app/atoms/Box";
import { H3 } from "~app/atoms/Headings";
import Text from "~app/atoms/Text";
import Divider from "~app/atoms/Divider";

const ProductCard: FC = () => {
  return (
    <Box backgroundColor="WHITE" display="block" maxWidth="738px">
      <Card>
        <Box>
          <Box width="216px">
            <Image
              alt="product photo"
              borderRadiusLeft
              objectFit="contain"
              src="https://via.placeholder.com/350x150"
            />
          </Box>
          <Box flexDirection="column" padding="0 10px 10px 10px" width="100%">
            <H3>Product name</H3>
            <Box margin="0 0 15px">
              <Text>Description here</Text>
            </Box>
            <Divider />
            <Box justifyContent="flex-end" margin="15px 0px 5px 0">
              <Text color="MAIN_RED" fontSize="fs400">
                Price here
              </Text>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ProductCard;
