import React, { FC } from "react";

import Image from "src/atoms/Image";
import Card from "src/atoms/Card";
import Box from "src/atoms/Box";
import { H2 } from "src/atoms/Headings";
import Text from "src/atoms/Text";
import Divider from "src/atoms/Divider";
import { ProductCardProps } from "./types";

const ProductCard: FC<ProductCardProps> = props => {
  const { title, imageUrl } = props;

  return (
    <Card>
      <Box flexDirection="column" height="100%">
        <Box height="200px">
          <Image alt="product photo" src={imageUrl} />
        </Box>
        <Box flexDirection="column" height="100%" padding="0 10px 10px 10px">
          <H2>{title}</H2>
          <Box flex={1} />
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
