import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

import Button from "../Button";

export default {
  title: "Components/Button"
};

export const Default = () => (
  <Button disabled={boolean("Disabled", false)} onClick={action("clicked")}>
    Search
  </Button>
);

Default.storyName = "default";

export const Transparent = () => (
  <Button
    disabled={boolean("Disabled", false)}
    onClick={action("clicked")}
    transparent
  >
    TV
  </Button>
);

Transparent.storyName = "transparent";
