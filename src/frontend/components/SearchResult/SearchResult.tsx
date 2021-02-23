import React, { FC } from "react";
import { useQuery, gql } from "@apollo/client";

import { Article, ProductName } from "../../../backend/scrapers/types";
import Box from "~app/atoms/Box";
import Loader from "~app/atoms/Loader";
import Grid from "~app/atoms/Grid";
import ProductList from "../ProductList";
import Filter from "../Filter";
import getOptions from "./helpers/getOptions";

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

  const options = getOptions(news);
  return (
    <Grid result>
      <Filter items={news} options={options} productName={ProductName.MD}>
        <ProductList />
      </Filter>
    </Grid>
  );
};

export default SearchResult;
