import React from "react";

import Box from "../../Box";
import Card from "../Card";

export default {
  title: "Components/Card"
};

export const Default = {
  render: () => (
    <Box height="500px" margin="s12">
      <Card>
        <Box
          alignItems="center"
          height="200px"
          justifyContent="center"
          width="200px"
        >
          Content here
        </Box>
      </Card>
    </Box>
  ),

  name: "Card"
};
