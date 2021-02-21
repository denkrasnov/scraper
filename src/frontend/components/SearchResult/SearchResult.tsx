import React, { FC } from "react";
import { useQuery, gql } from "@apollo/client";

import { Article, ProductName, Channel } from "../../../backend/scrapers/types";
import Box from "~app/atoms/Box";
import Loader from "~app/atoms/Loader";
import Grid from "~app/atoms/Grid";
import ProductList from "../ProductList";
import Filter from "../Filter";

const FETCH_NEWS = gql`
  query FetchNews {
    news {
      _id
      date
      header
      imageURL
      newsURL
      channel
    }
  }
`;

const SearchResult: FC = () => {
  const { loading, error, data } = useQuery<{ news: Article[] }>(FETCH_NEWS);

  if (loading || error || !data) {
    return (
      <Box justifyContent="center" marginTop="s48">
        {loading ? <Loader /> : "Error..."}
      </Box>
    );
  }

  const { news } = data;

  return (
    <Grid result>
      <Filter
        items={news}
        options={[Channel.NTV, Channel.TV8, Channel.JurnalTV]}
        productName={ProductName.MD}
      >
        <ProductList />
      </Filter>
    </Grid>
  );
};

export default SearchResult;
