import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import Touchable from "../Touchable";
import Card from "../../Card";
import Box from "../../Box";

storiesOf("Components|Touchable", module).add("default", () => {
  return (
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
});
