import React, { FC } from "react";
import useInfiniteScroll from "infinite-scroll-react-hook";

import Box from "~app/atoms/Box";
import ProductCard from "../ProductCard";
import { ProductListProps } from "./types";

const ProductList: FC<ProductListProps> = (props) => {
  const { products } = props;
  const [items, setRef] = useInfiniteScroll(products);

  return (
    <Box display="block" gridArea="result" margin="s20">
      {items.map((product) => (
        <Box key={product.header} marginBottom="s8">
          <ProductCard
            date={product.date}
            header={product.header}
            imageURL={product.imageURL}
            newsURL={product.newsURL}
          />
        </Box>
      ))}
      <Box ref={setRef} bottom="200px" position="relative" />
    </Box>
  );
};

export default ProductList;
