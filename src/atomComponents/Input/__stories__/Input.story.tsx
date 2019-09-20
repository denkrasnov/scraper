import React from "react";
import { storiesOf } from "@storybook/react";

import Input from "../Input";

storiesOf("AtomComponents|Input", module).add("default", () => (
  <Input placeholder="Input placeholder" />
));
