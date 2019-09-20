import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import "../src/initial.css";

addDecorator(withKnobs);

const req = require.context("../src", true, /\.story.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
