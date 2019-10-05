import React, { FC } from "react";

import Box from "../../../components/Box";
import Button from "../../../components/Buttons";
import Input from "../../../components/Input";

const SearchBar: FC = () => {
  return (
    <>
      <Input placeholder="Search" />
      <Box padding="0 10px">
        <Button>search</Button>
      </Box>
    </>
  );
};

export default SearchBar;
