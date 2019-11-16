import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import Text from "../Text";
import { sizes, weights } from "../fonts";
import { FontSize, FontWeight } from "../types";

const fontSizes = Object.keys(sizes);
const fontWeights = Object.keys(weights);

storiesOf("Components|Text", module).add("default", () => {
  return (
    <Text
      fontSize={select("Font size", fontSizes, fontSizes[2]) as FontSize}
      fontWeight={
        select("Font weight", fontWeights, fontWeights[1]) as FontWeight
      }
    >
      Text example
    </Text>
  );
});
