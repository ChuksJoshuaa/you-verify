export const findData = (data, status) => {
  if (status === "All") {
    return data;
  }
  const newItem = data.filter((item) => item.status === status);
  return newItem;
};
