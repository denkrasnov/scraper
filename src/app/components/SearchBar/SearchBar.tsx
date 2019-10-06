import React, { FC } from "react";

import Box from "src/atoms/Box";
import Button from "src/atoms/Buttons";
import Input from "src/atoms/Input";

const SearchBar: FC = () => {
  return (
    <>
      <Input placeholder="Search" />
      <Box padding="0 0 0 10px">
        <Button>search</Button>
      </Box>
    </>
  );
};

export default SearchBar;
