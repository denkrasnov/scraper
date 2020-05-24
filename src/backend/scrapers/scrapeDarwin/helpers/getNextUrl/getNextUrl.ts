const getNextUrl = (pageNumber: number | "" | null, url: string) => {
  const index = url.indexOf("?");
  const nextPageParam = `?page=${pageNumber ? pageNumber + 1 : 2}`;

  return index === -1
    ? `${url}${nextPageParam}`
    : `${url.substring(0, index)}${nextPageParam}`;
};

export default getNextUrl;
