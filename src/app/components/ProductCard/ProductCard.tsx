import React, { FC } from "react";

import Image from "../../../components/Image";
import Card from "../../../components/Card";
import Box from "../../../components/Box";
import { H2 } from "../../../components/Headings";
import Text from "../../../components/Text";
import Divider from "../../../components/Divider";

const ProductCard: FC = () => {
  return (
    <Card>
      <Box flexDirection="column">
        <Box height="200px">
          <Image
            alt="product photo"
            src="https://via.placeholder.com/350x150"
          />
        </Box>
        <Box flexDirection="column" padding="0 10px 10px 10px">
          <H2>Product name</H2>
          <Box margin="0 0 15px">
            <Text>Description here</Text>
          </Box>
          <Divider />
          <Box margin="15px 0px 5px 0">
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
