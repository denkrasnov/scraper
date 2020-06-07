import React from "react";

import Header from "~app/components/Header";
import SearchResult from "~app/components/SearchResult";
import Menu from "~app/components/Menu";
import Divider from "~app/atoms/Divider";
import Box from "~app/atoms/Box";

const Home = () => {
  return (
    <Box flexDirection="column" height="100%">
      <Header />
      <Divider />
      <Box
        background="BACKGROUND"
        flexDirection="column"
        flexGrow="gr1"
        marginBottom="s24"
      >
        <Box
          alignItems="flexStart"
          flexDirection="column"
          justifyContent="center"
          marginBottom="s32"
          marginTop="s20"
          width="100%"
        >
          <Menu />
        </Box>
        <SearchResult />
      </Box>
    </Box>
  );
};

export default Home;
