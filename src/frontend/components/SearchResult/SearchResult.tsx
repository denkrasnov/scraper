import React, { FC } from "react";

import Box from "~app/atoms/Box";
import { useFullContext } from "~app/services/ContextProvider";
import ProductList from "../ProductList";

const SearchResult: FC = () => {
  const [{ products, isLoading, isError }] = useFullContext();

  if (isLoading || isError) {
    return isLoading ? <Box>Loading...</Box> : <Box>Error...</Box>;
  }

  return products && <ProductList products={products} />;
};

export default SearchResult;
