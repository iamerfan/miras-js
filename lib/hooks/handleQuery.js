export const handleQuery = (value) => {
  const href = value.split("?", 2);
  return href[1];
};
export const handleSlug = (href, identification) => {
  const slug = href.split(identification, 2);
  return slug[1];
};
