import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Image from "~app/atoms/Image";
import Checkbox from "../Checkbox";

storiesOf("Components|Input/Checkbox", module)
  .add("checkbox", () => {
    return (
      <Checkbox
        label="label"
        name="story"
        onChange={action("Checkbox")}
        value="story"
      />
    );
  })
  .add("checkbox with image label", () => {
    return (
      <Checkbox
        label={
          <Image
            alt="storybook story test"
            src="https://live-tv-channels.org/pt-data/uploads/logo/md-jurnal-tv.jpg"
            width="30px"
          />
        }
        name="story"
        onChange={action("Checkbox")}
        value="story"
      />
    );
  });
