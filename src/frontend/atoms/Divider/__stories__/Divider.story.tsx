import type { Meta, StoryObj } from "@storybook/react";

import Box from "../../Box";
import Divider from "../Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider"
};

export default meta;

export const Default: StoryObj<typeof Divider> = {
  render: (args: any) => (
    <Box height="100px" margin="s8" width="100%">
      <Divider {...args} />
    </Box>
  ),

  name: "Divider"
};
