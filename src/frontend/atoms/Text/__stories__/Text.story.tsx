import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Text from "../Text";

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

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    fontWeight: {
      options: fontWeights
    },
    fontSize: {
      options: fontSizes
    }
  }
};

export default meta;

export const Default: StoryObj<typeof Text> = {
  render: (args) => <Text {...args}>Text example</Text>,

  name: "Text"
};
