import React from "react";
import { storiesOf } from "@storybook/react";

import Checkbox from "../Checkbox";

storiesOf("Components|Input", module).add("checkbox", () => {
  return <Checkbox label="label" name="story" value="story" />;
});
