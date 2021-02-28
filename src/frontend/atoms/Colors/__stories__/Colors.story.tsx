import React from "react";

import Box from "../../Box";
import Text from "../../Text";
import { colors } from "../colors";
import { Color } from "../types";

export default {
  title: "Components/Colors"
};

export const Default = () => {
  const colorItems = Object.keys(colors).map((key) => (
    <div
      key={key}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: 150,
        height: 150,
        border: `1px solid ${colors.BORDER_GRAY}`,
        margin: "10px"
      }}
    >
      <div
        style={{
          width: 100,
          height: 100,
          background: colors[key as Color],
          borderRadius: "100%"
        }}
      />
      <Text textAlign="center">{key}</Text>
    </div>
  ));
  return (
    <Box flexWrap="wrap" justifyContent="spaceBetween">
      {colorItems}
    </Box>
  );
};

Default.storyName = "Colors";
