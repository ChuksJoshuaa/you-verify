export const findData = (data, status) => {
  if (status === "All") {
    return data;
  }
  const newItem = data.filter((item) => item.status === status);
  return newItem;
};

let firstStatus = "Unassigned";
let secondStatus = "Assigned";
let thirdStatus = "Completed";

export const findLength = (data) => {
  let newItem = [];

  let firstLength = data.filter((item) => item.status === firstStatus);
  const firstLengthItem = firstLength.length;

  let secondLength = data.filter((item) => item.status === secondStatus);
  const secondLengthItem = secondLength.length;

  let thirdLength = data.filter((item) => item.status === thirdStatus);
  const thirdLengthItem = thirdLength.length;

  return (newItem = [firstLengthItem, secondLengthItem, thirdLengthItem]);
};

export const sliceNumber = (num, len) => +String(num).slice(0, len);

export const removeDigit = (digit, index) => {
  let num;

  if (digit === firstStatus) {
    num = index[0];
  }
  if (digit === secondStatus) {
    num = index[1];
  }
  if (digit === thirdStatus) {
    num = index[2];
  }

  console.log(num);

  return num;
};
