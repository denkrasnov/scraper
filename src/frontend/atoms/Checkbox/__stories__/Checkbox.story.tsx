import type { Meta, StoryObj } from "@storybook/react";

import Image from "~app/atoms/Image";
import Checkbox from "../Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Input/Checkbox",
  component: Checkbox
};

export default meta;

export const Default: StoryObj<typeof Checkbox> = {
  render: (args: any) => <Checkbox {...args} />,
  name: "default"
};

export const CheckboxWithImageLabel: StoryObj<typeof Checkbox> = {
  render: (args: any) => (
    <Checkbox
      {...args}
      label={
        <Image
          alt="storybook story test"
          src="https://live-tv-channels.org/pt-data/uploads/logo/md-jurnal-tv.jpg"
          width="30px"
        />
      }
    />
  ),

  name: "checkbox with image label"
};

export const CheckboxStyled: StoryObj<typeof Checkbox> = {
  render: (args: any) => (
    <Checkbox
      {...args}
      label={
        <Image
          alt="storybook story test"
          src="https://live-tv-channels.org/pt-data/uploads/logo/md-jurnal-tv.jpg"
          width="30px"
        />
      }
    />
  ),

  name: "checkbox styled"
};
