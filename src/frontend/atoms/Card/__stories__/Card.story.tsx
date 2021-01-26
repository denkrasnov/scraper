import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import Box from "../../Box";
import Card from "../Card";

storiesOf("Components|Card", module).add("default", () => {
  return (
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
});
