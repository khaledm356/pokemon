export const getIdFromUrl = (string) => {
  const url = new URL(string);
  const path = url.pathname.split("/");
  return path[4];
};
