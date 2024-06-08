import React, { FC } from "react";
import useInfiniteScroll from "infinite-scroll-react-hook";

import Box from "~app/atoms/Box";
import isDesktop from "~app/atoms/hooks/isDesktop";
import ProductCard from "../ProductCard";
import { ProductListProps } from "./types";

const ProductList: FC<ProductListProps> = (props) => {
  const { products = [] } = props;
  const [items, setRef] = useInfiniteScroll(products);
  const desktop = isDesktop();

  return (
    <Box
      display="block"
      gridArea="result"
      margin={desktop ? "s20" : undefined}
      marginTop={desktop ? undefined : "s8"}
    >
      {items.map((product) => {
        return (
          <Box key={product.id} marginBottom="s8">
            <ProductCard
              channel={"No channel yet"}
              date={product.postDate}
              header={product.title}
              imageURL={product.imageURL}
              // newsURL={product.newsURL}
            />
          </Box>
        );
      })}
      <Box ref={setRef} bottom="200px" position="relative" />
    </Box>
  );
};

export default ProductList;
