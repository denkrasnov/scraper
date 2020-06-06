import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import Text from "../Text";
import { FontSize, FontWeight } from "../types";

const fontSizes = [
  "fs10",
  "fs12",
  "fs14",
  "fs16",
  "fs18",
  "fs20",
  "fs22",
  "fs24",
  "fs26"
];
const fontWeights = ["fw200", "fw400", "fw700"];

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
