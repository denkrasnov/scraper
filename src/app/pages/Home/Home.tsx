import React from "react";

import Box from "../../../components/Box";
import Divider from "../../../components/Divider";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <>
      <Box padding="0 40px">
        <Header />
      </Box>
      <Divider />
      <Box
        backgroundColor="BACKGROUND"
        height="calc(100vh - 61px)"
        padding="0 40px"
      >
        <Box alignItems="flex-start" grow={1} margin="20px 0" width="100%">
          <SearchBar />
        </Box>
      </Box>
    </>
  );
};

export default Home;
