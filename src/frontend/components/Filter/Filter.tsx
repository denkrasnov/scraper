import React, {
  FC,
  ChangeEvent,
  Children,
  cloneElement,
  PropsWithChildren
} from "react";

import { Article } from "../../../backend/scrapers/types";
import Box from "~app/atoms/Box";
import Image from "~app/atoms/Image";
import Checkbox from "~app/atoms/Checkbox";
import Card from "~app/atoms/Card";
import Divider from "~app/atoms/Divider";
import Text from "~app/atoms/Text";
import isDesktop from "~app/atoms/hooks/isDesktop";
import { channelLogo } from "~app/common/constants";
import { filterName } from "./constants";
import { FilterProps } from "./types";
import useFilter from "./hooks/useFilter";

const Filter: FC<PropsWithChildren<FilterProps>> = (props) => {
  const { productName, options, children, items, onClickLocale, locale } =
    props;
  const desktop = isDesktop();
  const [filteredItems, filter] = useFilter<Article>(items);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    filter(event.target.checked, event.target.value, "channel");
  };

  const child = Children.only(children);
  const childWithProps = cloneElement(child as any, {
    products: filteredItems
  });

  return (
    <>
      <Box
        display="inlineBlock"
        gridArea="filter"
        marginBottom="s20"
        marginLeft={desktop ? "s20" : undefined}
        marginTop="s20"
      >
        <Card>
          <Box flexDirection="column" padding="s12">
            <Box justifyContent="spaceBetween" marginBottom="s4">
              <Text fontSize="fs14" fontWeight="fw700">
                {filterName[productName]}
              </Text>
              {locale && (
                <Box cursor="pointer" onClick={onClickLocale}>
                  <Text color="TEXT_GRAY" fontSize="fs16" gradientHover>
                    {locale}
                  </Text>
                </Box>
              )}
            </Box>
            <Divider />
            <Box
              flexDirection={desktop ? "column" : undefined}
              justifyContent={desktop ? "flexStart" : "spaceAround"}
            >
              {options.map((option) => (
                <Box key={option} marginTop="s12">
                  <Checkbox
                    label={
                      <Image
                        alt="channel logo"
                        height="30px"
                        src={channelLogo[option]}
                        width="30px"
                      />
                    }
                    name={option}
                    onChange={onChange}
                    styled={option}
                    value={option}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Card>
      </Box>
      {childWithProps}
    </>
  );
};

export default Filter;
