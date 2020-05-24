import React from "react";

import Box from "~app/atoms/Box";
import { useFullContext } from "~app/services/ContextProvider";
import { ActionTypes } from "~app/services/fetchProducts/types";
import { image } from "~app/assets";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [, dispatch] = useFullContext();
  return (
    <Box justifyContent="center" width="100%">
      <MenuItem
        onClick={() => dispatch({ type: ActionTypes.FETCH, payload: "tvs" })}
        src={image.tv}
        text="Televisions"
      />
      <MenuItem
        onClick={() =>
          dispatch({ type: ActionTypes.FETCH, payload: "fridges" })
        }
        src={image.fridge}
        text="Refrigerators"
      />
    </Box>
  );
};

export default Menu;
