import React, { FC } from "react";

import Image from "~app/atoms/Image";
import Card from "~app/atoms/Card";
import Box from "~app/atoms/Box";
import { H3 } from "~app/atoms/Headings";
import Text from "~app/atoms/Text";
import Divider from "~app/atoms/Divider";
import { ProductCardProps } from "./types";
import { image } from "~app/assets";

const ProductCard: FC<ProductCardProps> = (props) => {
  const { title, imageUrl, price, noImage } = props;

  return (
    <Card>
      <Box flexDirection="column" height="100%">
        <Box height="200px">
          <Image
            alt="product photo"
            src={noImage ? image.tvPlaceholder : imageUrl}
          />
        </Box>
        <Box flexDirection="column" height="100%" padding="0 10px 10px 10px">
          <H3>{title}</H3>
          <Box flex={1} />
          <Divider />
          <Box justifyContent="flex-end" margin="15px 0px 5px 0">
            <Text color="MAIN_RED" fontSize="fs400" fontWeight="fw700">
              lei {price}
            </Text>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
