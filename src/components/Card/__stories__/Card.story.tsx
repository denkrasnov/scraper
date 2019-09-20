import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "../../Box";
import Card from "../Card";

storiesOf("Components|Card", module).add("default", () => {
  return (
    <Box>
      <Card>
        <Box
          width="200px"
          height="200px"
          alignItems="center"
          justifyContent="center"
        >
          Content here
        </Box>
      </Card>
    </Box>
  );
});
