import React from "react";
import { boolean } from "@storybook/addon-knobs";

import Touchable from "../Touchable";
import Card from "../../Card";
import Box from "../../Box";

export default {
  title: "Components/Touchable"
};

export const Default = () => (
  <Box margin="s20">
    <Touchable productHover={boolean("Hover effect", false)}>
      <Card>
        <Box
          alignItems="center"
          height="100px"
          justifyContent="center"
          width="100px"
        >
          Content
        </Box>
      </Card>
    </Touchable>
  </Box>
);

Default.storyName = "Touchable";
