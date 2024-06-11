import React from "react";

import Header from "~app/components/Header";
import SearchResult from "~app/components/SearchResult";
import Box from "~app/atoms/Box";
import Grid from "~app/atoms/Grid";

const Home = () => (
  <Box flexDirection="column" height="100%">
    <Grid flexGrow="gr1" main>
      <Header />
      <Box flexDirection="column" gridArea="body">
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
    </Grid>
  </Box>
);

export default Home;
