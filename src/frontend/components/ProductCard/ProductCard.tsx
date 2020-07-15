import React, { FC } from "react";

import Image from "~app/atoms/Image";
import Touchable from "~app/atoms/Touchable";
import Card from "~app/atoms/Card";
import Box from "~app/atoms/Box";
import { H3 } from "~app/atoms/Headings";
import Text from "~app/atoms/Text";
import Divider from "~app/atoms/Divider";
import { ProductCardProps } from "./types";

const ProductCard: FC<ProductCardProps> = (props) => {
  const { title, imageUrl, price, noImage, shop, productUrl } = props;

  return (
    <Touchable
      dataAttr={{ "data-e2e-id": "productCard" }}
      href={productUrl}
      productHover
    >
      <Card fullHeight rounded>
        <Box
          flexDirection="column"
          height="100%"
          justifyContent="spaceBetween"
          padding="s12"
        >
          <Box height="200px" justifyContent="center" minHeight="200px">
            {noImage ? (
              <Box alignSelf="center">
                <Text color="BORDER_GRAY" fontSize="fs24" fontWeight="fw700">
                  No photo
                </Text>
              </Box>
            ) : (
              <Image alt="product photo" src={imageUrl} width="100%" />
            )}
          </Box>
          <Box flexDirection="column">
            <Text textAlign="center">
              <H3>{title}</H3>
            </Text>
            <Divider />
            <Box
              justifyContent="spaceBetween"
              marginBottom="s4"
              marginTop="s16"
            >
              <Text color="BORDER_DARK" fontSize="fs16">
                {shop}
              </Text>
              <Text color="MAIN_RED" fontSize="fs16" fontWeight="fw700">
                lei {price}
              </Text>
            </Box>
          </Box>
        </Box>
      </Card>
    </Touchable>
  );
};

export default ProductCard;
