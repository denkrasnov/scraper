import React, { FC } from "react";

import Image from "~app/atoms/Image";
import Touchable from "~app/atoms/Touchable";
import Card from "~app/atoms/Card";
import Box from "~app/atoms/Box";
import { H3 } from "~app/atoms/Headings";
import Text from "~app/atoms/Text";
import Divider from "~app/atoms/Divider";
import { channelLogo } from "~app/common/constants";
import { ProductCardProps } from "./types";

const ProductCard: FC<ProductCardProps> = (props) => {
  const { date, header, imageURL, newsURL, channel } = props;

  return (
    <Touchable
      dataAttr={{ "data-e2e-id": "productCard" }}
      href={newsURL}
      productHover
      width="100%"
    >
      <Card fullHeight>
        <Box padding="s12" width="100%">
          <Box height="120px" marginRight="s12" minHeight="120px">
            {!imageURL ? (
              <Box alignSelf="center">
                <Text color="BORDER_GRAY" fontSize="fs24" fontWeight="fw700">
                  No photo
                </Text>
              </Box>
            ) : (
              <Image alt="product photo" src={imageURL} width="100%" />
            )}
          </Box>
          <Box flexDirection="column" width="100%">
            <Box alignItems="center" flexGrow="gr1">
              <Text>
                <H3>{header}</H3>
              </Text>
            </Box>
            <Divider />
            <Box justifyContent="spaceBetween" marginTop="s8">
              <Image
                alt="channel"
                height="30px"
                src={channelLogo[channel]}
                width="30px"
              />
              <Text color="BORDER_DARK" fontWeight="fw700">
                {date}
              </Text>
            </Box>
          </Box>
        </Box>
      </Card>
    </Touchable>
  );
};

export default ProductCard;
