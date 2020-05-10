const getNextUrl = (pageNumber: number | "" | null, url: string) => {
  const regex = /([1-9]?[0-9]*)?\?/;

  return url.replace(regex, `${pageNumber ? pageNumber + 1 : 2}?`);
};

export default getNextUrl;
