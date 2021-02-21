export const getNextUrl = (pageNumber: number | "" | null, url: string) => {
  const regex = /politic(\/[1-9]?[0-9]*)?/;
  return url.replace(regex, `politic/${pageNumber ? pageNumber + 1 : 2}`);
};
