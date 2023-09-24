export const mergeParams = async (object) => {
  const values = Object.values(object);
  return values.join("/");
};
