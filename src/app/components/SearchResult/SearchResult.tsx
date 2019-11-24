import React, { FC } from "react";

import Box from "src/atoms/Box";
import { useFullContext } from "src/app/services/ContextProvider";
import ProductCard from "../ProductCard";

const SearchResult: FC = () => {
  const [{ products, isLoading, isError }] = useFullContext();

  if (isLoading || isError) {
    return isLoading ? <Box>Loading...</Box> : <Box>Error...</Box>;
  }

  return (
    <Box flexWrap="wrap">
      {products &&
        products.map(product => (
          <Box key={product.id} margin="0 10px 10px 0">
            <ProductCard imageUrl={product.imageUrl} title={product.title} />
          </Box>
        ))}
    </Box>
  );
};

export default SearchResult;
