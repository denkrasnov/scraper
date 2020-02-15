import React from "react";
import { storiesOf } from "@storybook/react";

import Input from "../Input";

storiesOf("Components|Input", module).add("default", () => (
  <Input name="fieldName" placeholder="Input placeholder" />
));
