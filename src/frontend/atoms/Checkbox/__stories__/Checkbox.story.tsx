import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Checkbox from "../Checkbox";

storiesOf("Components|Input", module).add("checkbox", () => {
  return (
    <Checkbox
      label="label"
      name="story"
      onChange={action("Checkbox")}
      value="story"
    />
  );
});
