import React from "react";

import Header from "~app/components/Header";
import SearchBar from "~app/components/SearchBar";
import SearchResult from "~app/components/SearchResult";
import Divider from "~app/atoms/Divider";
import Box from "~app/atoms/Box";

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
