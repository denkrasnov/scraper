import React from "react";

import Box from "src/atoms/Box";
import Divider from "src/atoms/Divider";
import Header from "src/components/Header";
import SearchBar from "src/components/SearchBar";
import SearchResult from "src/components/SearchResult";

const Home = () => {
  return (
    <>
      <Header />
      <Divider />
      <Box flexDirection="column" marginBottom="25px" padding="0 5%">
        <Box
          alignItems="flex-start"
          grow={1}
          justifyContent="center"
          margin="20px 0 30px"
          width="100%"
        >
          <SearchBar />
        </Box>
        <SearchResult />
      </Box>
    </>
  );
};

export default Home;
