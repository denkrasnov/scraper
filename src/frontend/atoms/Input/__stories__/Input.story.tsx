import React from "react";
import { storiesOf } from "@storybook/react";

import Input from "../Input";

storiesOf("Components|Input/Text", module).add("text", () => (
  <Input name="fieldName" placeholder="Input placeholder" />
));
