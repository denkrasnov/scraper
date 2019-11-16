import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Box from "../../Box";
import Image from "../Image";
import { ObjectFit } from "../types";

storiesOf("Components|Image", module).add("default", () => (
  <Box
    height={text("Change Box height", "150px")}
    width={text("Change Box width", "350px")}
  >
    <Image
      alt={text("Change alt", "Storybook example")}
      objectFit={text("Change object-fit attribute", "fill") as ObjectFit}
      src={text("Change the image src", "https://via.placeholder.com/350x150")}
    />
  </Box>
));
