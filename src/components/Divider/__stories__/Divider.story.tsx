import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import Box from "../../Box";
import Divider from "../Divider";

storiesOf("Components|Divider", module).add("default", () => {
  return (
    <Box height="100px" width="100%">
      <Divider vertical={boolean("Vertical position", false)} />
    </Box>
  );
});
