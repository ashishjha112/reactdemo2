export const expenseData = [
  {
    expenseID: 1,
    itemName: "milk",
    category: "Dairy",
    itemAmount: 100,
  },
  {
    expenseID: 2,
    itemName: "ball",
    category: "Sports",
    itemAmount: 50,
  },
  {
    expenseID: 3,
    itemName: "apple",
    category: "Fruits",
    itemAmount: 25,
  },
];

export interface FormData {
  expenseID: number;
  itemName: string;
  category: string;
  itemAmount: number;
}
