import { FC } from "react";
import { useQuery, gql } from "@apollo/client";

// TODO create shared types
import { Article } from "../../../backend/scrapers/types";
import { Locale } from "../../../types";
import Box from "~app/atoms/Box";
import Loader from "~app/atoms/Loader";
import Grid from "~app/atoms/Grid";
import ProductList from "../ProductList";
// import Filter from "../Filter";
// import getOptions from "./helpers/getOptions";

const FETCH_NEWS = gql`
  query FetchNews($locale: String!) {
    news(locale: $locale) {
      id
      postDate
      title
      imageURL
      text
    }
  }
`;

const SearchResult: FC = () => {
  // const [locale, setLocale] = useState(Locale.RU);
  // const nextLocale = locale === Locale.MD ? Locale.RU : Locale.MD;

  const { loading, error, data } = useQuery<{ news: Article[] }>(FETCH_NEWS, {
    variables: { locale: Locale.RU }
  });

  // const onClickLocale = () => {
  //   setLocale(nextLocale);
  // };

  if (loading || error || !data) {
    return (
      <Box justifyContent="center" marginTop="s48">
        {loading ? <Loader /> : "Oops Error..."}
      </Box>
    );
  }

  const { news } = data;

  // const options = getOptions(news);
  return (
    <Grid result>
      {/* <Filter
        items={news}
        locale={locale}
        onClickLocale={onClickLocale}
        options={options}
        productName={ProductName.MD}
      >
        <ProductList  />
      </Filter> */}
      <ProductList products={news} />
    </Grid>
  );
};

export default SearchResult;
