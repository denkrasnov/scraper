import React, { FC } from "react";

import Box from "~app/atoms/Box";
import Loader from "~app/atoms/Loader";
import { useFullContext } from "~app/services/ContextProvider";
import ProductList from "../ProductList";

const SearchResult: FC = () => {
  const [{ products, isLoading, isError }] = useFullContext();

  if (isLoading || isError) {
    return (
      <Box justifyContent="center" marginTop="s48">
        {isLoading ? <Loader /> : "Error..."}
      </Box>
    );
  }

  return products && <ProductList products={products} />;
};

export default SearchResult;
