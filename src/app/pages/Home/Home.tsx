import React from "react";

import Box from "src/atoms/Box";
import Divider from "src/atoms/Divider";
import Header from "src/app/components/Header";
import SearchBar from "src/app/components/SearchBar";
// import CompareCard from "src/app/components/CompareCard";
import SearchResult from "src/app/components/SearchResult";

const Home = () => {
  return (
    <>
      <Header />
      <Divider />
      <Box flexDirection="column" padding="0 15px">
        <Box
          alignItems="flex-start"
          grow={1}
          justifyContent="center"
          margin="20px 0"
          width="100%"
        >
          <SearchBar />
        </Box>
        {/* <CompareCard /> */}
        <SearchResult />
      </Box>
    </>
  );
};

export default Home;
