import React from "react";
import { boolean } from "@storybook/addon-knobs";

import Box from "../../Box";
import Card from "../Card";

export default {
  title: "Components/Card"
};

export const Default = () => (
  <Box height="500px" margin="s12">
    <Card
      fullHeight={boolean("fullHeight", false)}
      rounded={boolean("rounded", false)}
    >
      <Box
        alignItems="center"
        height="200px"
        justifyContent="center"
        width="200px"
      >
        Content here
      </Box>
    </Card>
  </Box>
);

Default.storyName = "Card";
