import { useMediaQuery } from "react-responsive";

const isDesktop = () =>
  useMediaQuery({
    query: "(min-width: 992px)"
  });

export default isDesktop;
