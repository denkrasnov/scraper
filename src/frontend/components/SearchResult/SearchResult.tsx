import React, { FC } from "react";

import Box from "~app/atoms/Box";
import Loader from "~app/atoms/Loader";
import Grid from "~app/atoms/Grid";
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

  return products?.items.length ? (
    <Grid main>
      <ProductList products={products.items} />
    </Grid>
  ) : null;
};

export default SearchResult;
