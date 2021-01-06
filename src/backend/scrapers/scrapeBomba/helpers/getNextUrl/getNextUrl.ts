export const getNextUrl = (pageNumber: number | "" | null, url: string) => {
  const index = url.indexOf("page");
  const nextPageParam = `&page=${pageNumber ? pageNumber + 1 : 2}`;
  const regex = /&page=[1-9]/g;

  return index === -1
    ? `${url}&${nextPageParam}&sort=3`
    : `${url.replace(regex, nextPageParam)}`;
};
