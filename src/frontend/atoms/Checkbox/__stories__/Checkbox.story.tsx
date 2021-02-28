import React from "react";
import { optionsKnob } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { channelLogo } from "../../../common/constants";
import { Channel } from "../../../../backend/scrapers/types";
import Image from "~app/atoms/Image";
import Checkbox from "../Checkbox";

export default {
  title: "Components/Input/Checkbox"
};

export const Default = () => {
  return (
    <Checkbox
      label="label"
      name="story"
      onChange={action("Checkbox")}
      value="story"
    />
  );
};

Default.storyName = "default";

export const CheckboxWithImageLabel = () => {
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
};

CheckboxWithImageLabel.storyName = "checkbox with image label";

export const CheckboxStyled = () => {
  const logosOptions = optionsKnob(
    "Channel",
    {
      [Channel.TV8]: channelLogo[Channel.TV8],
      [Channel.NTV]: channelLogo[Channel.NTV],
      [Channel.JurnalTV]: channelLogo[Channel.JurnalTV]
    },
    channelLogo[Channel.TV8],
    {
      display: "inline-radio"
    }
  );
  const styles = optionsKnob(
    "Styles",
    {
      [Channel.TV8]: Channel.TV8,
      [Channel.NTV]: Channel.NTV,
      [Channel.JurnalTV]: Channel.JurnalTV
    },
    Channel.TV8,
    {
      display: "inline-radio"
    }
  );
  return (
    <Checkbox
      label={
        <Image alt="storybook story test" src={logosOptions} width="30px" />
      }
      name="story"
      onChange={action("Checkbox")}
      styled={styles}
      value="story"
    />
  );
};

CheckboxStyled.storyName = "checkbox styled";
