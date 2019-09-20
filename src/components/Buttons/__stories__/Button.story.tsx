import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

import Button from "../Button";

storiesOf("Components|Button", module).add("default", () => (
  <Button disabled={boolean("Disabled", false)} onClick={action("clicked")}>
    Search
  </Button>
));
