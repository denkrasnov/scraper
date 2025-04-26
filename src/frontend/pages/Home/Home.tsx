import Header from "~app/components/Header";
import SearchResult from "~app/components/SearchResult";
import Box from "~app/atoms/Box";
import Grid from "~app/atoms/Grid";

const Home = () => (
  <Box flexDirection="column" height="100%">
    <Grid main>
      <Header />
      <Box
        background="BACKGROUND"
        display="flex"
        flexDirection="column"
        gridArea="banner"
        overflow="hidden"
      >
        <Box
          background="BLACK"
          height="700px"
          marginTop="sn60"
          shadow="header"
          width="40%"
        />
      </Box>
      <Box flexDirection="column" gridArea="body">
        <Box
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
