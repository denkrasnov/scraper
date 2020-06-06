import React, { FC } from "react";

import Box from "~app/atoms/Box";
import Grid from "~app/atoms/Grid";
import { useFullContext } from "~app/services/ContextProvider";
import ProductCard from "../ProductCard";

const SearchResult: FC = () => {
  const [{ products, isLoading, isError }] = useFullContext();

  if (isLoading || isError) {
    return isLoading ? <Box>Loading...</Box> : <Box>Error...</Box>;
  }

  return (
    <Box display="block" margin="s20">
      <Grid>
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.imageUrl}
              noImage={product.noImage}
              price={product.price}
              title={product.title}
            />
          ))}
      </Grid>
    </Box>
  );
};

export default SearchResult;
