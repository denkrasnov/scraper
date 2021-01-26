export const getNextUrl = (pageNumber: number | "" | null, url: string) => {
  // const regex = /([1-9]?[0-9]*)?/;
  const regex = /ultima-ora\/([1-9]?[0-9]*)?/;

  return url.replace(regex, `ultima-ora/${pageNumber ? pageNumber + 1 : 2}`);
};
