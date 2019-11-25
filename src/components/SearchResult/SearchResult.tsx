import React, { FC } from "react";

import Box from "src/atoms/Box";
import Grid from "src/atoms/Grid";
import { useFullContext } from "src/services/ContextProvider";
import ProductCard from "../ProductCard";

const SearchResult: FC = () => {
  const [{ products, isLoading, isError }] = useFullContext();

  if (isLoading || isError) {
    return isLoading ? <Box>Loading...</Box> : <Box>Error...</Box>;
  }

  return (
    <Grid
      gridGap="25px"
      gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
    >
      {products &&
        products.map(product => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            price={product.price}
            title={product.title}
          />
        ))}
    </Grid>
  );
};

export default SearchResult;
