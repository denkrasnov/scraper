import React, { FC } from "react";

import Box from "src/atoms/Box";
import { useFullContext } from "src/app/services/fetchProducts";
import ProductCard from "../ProductCard";

const SearchResult: FC = () => {
  const {
    products: [{ products, isLoading, isError }]
  } = useFullContext();

  console.log("products---->", products);

  if (isLoading || isError) {
    return isLoading ? <Box>Loading...</Box> : <Box>Error...</Box>;
  }

  return (
    <Box flexWrap="wrap">
      {products &&
        products.map(product => (
          <Box key={product.id} margin="0 10px 10px 0">
            <ProductCard product={product} />
          </Box>
        ))}
    </Box>
  );
};

export default SearchResult;
