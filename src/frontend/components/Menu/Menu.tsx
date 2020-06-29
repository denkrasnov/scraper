import React from "react";

import Box from "~app/atoms/Box";
import { useFullContext } from "~app/services/ContextProvider";
import { ActionTypes } from "~app/services/fetchProducts/types";
import { image } from "~app/assets";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [, dispatch] = useFullContext();

  return (
    <Box
      justifyContent="center"
      marginBottom="s32"
      marginTop="s20"
      width="100%"
    >
      <MenuItem
        dataAttr={{ "data-e2e-id": "menuItem.tv" }}
        onClick={() => dispatch({ type: ActionTypes.FETCH, payload: "tvs" })}
        src={image.tv}
        text="Телевизоры"
      />
      <MenuItem
        dataAttr={{ "data-e2e-id": "menuItem.fridge" }}
        onClick={() =>
          dispatch({ type: ActionTypes.FETCH, payload: "fridges" })
        }
        src={image.fridge}
        text="Холодильники"
      />
    </Box>
  );
};

export default Menu;
