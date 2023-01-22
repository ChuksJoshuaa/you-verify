import { generateUniqueId } from "./generateUniqueId";
const selectBox = [
  { id: generateUniqueId(), label: "All" },
  { id: generateUniqueId(), label: "Agent" },
  { id: generateUniqueId(), label: "User" },
];

export default selectBox;
