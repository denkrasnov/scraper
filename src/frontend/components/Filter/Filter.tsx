import React, { FC } from "react";

import Box from "~app/atoms/Box";
import Checkbox from "~app/atoms/Checkbox";
import Card from "~app/atoms/Card";
import Divider from "~app/atoms/Divider";
import Text from "~app/atoms/Text";
import { filterName } from "./constants";
import { FilterProps } from "./types";

const Filter: FC<FilterProps> = (props) => {
  const { productName, options } = props;

  return (
    <Box
      display="inlineBlock"
      gridArea="filter"
      marginBottom="s20"
      marginLeft="s20"
      marginTop="s20"
    >
      <Card>
        <Box flexDirection="column" padding="s12">
          <Box marginBottom="s4">
            <Text fontSize="fs14" fontWeight="fw700">
              {filterName[productName]}
            </Text>
          </Box>
          <Divider />
          {options.map((option) => (
            <Box key={option} marginTop="s12">
              <Checkbox label={option} name={option} value={option} />
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default Filter;
