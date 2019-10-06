import React from "react";

import Box from "src/atoms/Box";
import Divider from "src/atoms/Divider";
import Header from "src/app/components/Header";
import SearchBar from "src/app/components/SearchBar";
import ProductCard from "src/app/components/ProductCard";

const Home = () => {
  return (
    <>
      <Box padding="0 40px">
        <Header />
      </Box>
      <Divider />
      <Box
        backgroundColor="BACKGROUND"
        flexDirection="column"
        height="calc(100vh - 61px)"
        padding="0 15px"
      >
        <Box alignItems="flex-start" grow={1} margin="20px 0" width="100%">
          <SearchBar />
        </Box>
        <ProductCard />
      </Box>
    </>
  );
};

export default Home;
