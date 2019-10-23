import React, { FC } from "react";

import Box from "src/atoms/Box";
import Button from "src/atoms/Buttons";
import Input from "src/atoms/Input";

const SearchBar: FC = () => {
  return (
    <Box maxWidth="739px" width="100%">
      <Input placeholder="Search" />
      <Box padding="0 0 0 10px">
        <Button>search</Button>
      </Box>
    </Box>
  );
};

export default SearchBar;
