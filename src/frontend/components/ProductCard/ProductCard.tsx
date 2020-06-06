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
      <Box flexDirection="column" height="100%" padding="s8">
        <Box justifyContent="center" minHeight="200px">
          <Image
            alt="product photo"
            src={noImage ? image.tvPlaceholder : imageUrl}
            width="100%"
          />
        </Box>
        <Box flexDirection="column" height="100%">
          <Text textAlign="center">
            <H3>{title}</H3>
          </Text>
          <Divider />
          <Box justifyContent="flexEnd" marginBottom="s4" marginTop="s16">
            <Text color="MAIN_RED" fontSize="fs16" fontWeight="fw700">
              lei {price}
            </Text>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
