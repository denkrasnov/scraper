import React from "react";

import Header from "~app/components/Header";
import SearchResult from "~app/components/SearchResult";
import Divider from "~app/atoms/Divider";
import Box from "~app/atoms/Box";

const Home = () => {
  return (
    <Box flexDirection="column" height="100%">
      <Header />
      <Divider />
      <Box
        background="BACKGROUND"
        display="block"
        flexDirection="column"
        flexGrow="gr1"
        marginBottom="s24"
      >
        <SearchResult />
      </Box>
    </Box>
  );
};

export default Home;
