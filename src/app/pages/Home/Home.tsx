import React from "react";

import Box from "../../../components/Box";
import Divider from "../../../components/Divider";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import ProductCard from "../../components/ProductCard";

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
