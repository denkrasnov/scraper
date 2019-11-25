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
    <Box
      backgroundColor="WHITE"
      display="block"
      margin="0 20px 20px 0"
      maxWidth="380px"
      width="100%"
    >
      <Card>
        <Box flexDirection="column">
          <Box height="200px">
            <Image alt="product photo" src={imageUrl} />
          </Box>
          <Box flexDirection="column" padding="0 10px 10px 10px">
            <H2>{title}</H2>
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
    </Box>
  );
};

export default ProductCard;
