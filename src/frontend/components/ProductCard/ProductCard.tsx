import { FC } from "react";
import { Link } from "react-router-dom";

import Image from "~app/atoms/Image";
import Touchable from "~app/atoms/Touchable";
import Card from "~app/atoms/Card";
import Box from "~app/atoms/Box";
import { H3 } from "~app/atoms/Headings";
import Text from "~app/atoms/Text";
import Divider from "~app/atoms/Divider";
import { ProductCardProps } from "./types";

const ProductCard: FC<ProductCardProps> = (props) => {
  const { date, header, imageURL, id } = props;

  return (
    <Touchable
      dataAttr={{ "data-e2e-id": "productCard" }}
      productHover
      width="100%"
    >
      <Link style={{ textDecoration: "none" }} to={id!}>
        <Card fullHeight>
          <Box padding="s12" width="100%">
            <Box marginRight="s12" width="40%">
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
              <Box marginTop="s8">
                <Text fontSize="fs12" fontWeight="fw700">
                  {date}
                </Text>
              </Box>
            </Box>
          </Box>
        </Card>
      </Link>
    </Touchable>
  );
};

export default ProductCard;
