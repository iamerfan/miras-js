export const getSearchParams = (req, value) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  return searchParams.get(value);
};
