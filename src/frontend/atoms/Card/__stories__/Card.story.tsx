import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "../../Box";
import Card from "../Card";

storiesOf("Components|Card", module).add("default", () => {
  return (
    <Box>
      <Card>
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
