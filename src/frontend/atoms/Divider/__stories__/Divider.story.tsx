import React from "react";
import { boolean } from "@storybook/addon-knobs";

import Box from "../../Box";
import Divider from "../Divider";

export default {
  title: "Components/Divider"
};

export const Default = () => (
  <Box height="100px" margin="s8" width="100%">
    <Divider vertical={boolean("Vertical position", false)} />
  </Box>
);

Default.storyName = "Divider";
