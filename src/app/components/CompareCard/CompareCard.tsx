import React, { FC } from "react";

import Image from "src/atoms/Image";
import Card from "src/atoms/Card";
import Box from "src/atoms/Box";
import { H3 } from "src/atoms/Headings";
import Text from "src/atoms/Text";
import Divider from "src/atoms/Divider";

const ProductCard: FC = () => {
  return (
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
  );
};

export default ProductCard;
