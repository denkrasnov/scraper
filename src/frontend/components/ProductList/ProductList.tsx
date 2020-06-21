import React, { FC } from "react";
import useInfiniteScroll from "infinite-scroll-react-hook";

import Box from "~app/atoms/Box";
import Grid from "~app/atoms/Grid";
import ProductCard from "../ProductCard";
import { ProductListProps } from "./types";

const ProductList: FC<ProductListProps> = (props) => {
  const { products } = props;
  const [items, setRef] = useInfiniteScroll(products);

  return (
    <Box display="block" margin="s20">
      <Grid>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            noImage={product.noImage}
            price={product.price}
            productUrl={product.productUrl}
            shop={product.shop}
            title={product.title}
          />
        ))}
        <Box ref={setRef} bottom="200px" position="relative" />
      </Grid>
    </Box>
  );
};

export default ProductList;
