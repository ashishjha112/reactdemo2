import { useState } from "react";
import { expenseData } from "./Utility";
import CreateExpense from "./CreateExpense";
import ManageExpense from "./ManageExpense";
import { FormData } from "./Utility";

const ExpenseTracker = () => {
  const [expense, setExpense] = useState(expenseData);
  const [selectedCategory, setSelectedCategory] = useState("");
  const submitForm = (data: FormData) => {
    console.log(data);
    setExpense([...expense, { ...data, expenseID: expense.length + 1 }]);
  };
  const onCatSerachChange = (data: string) => {
    if (data === "All Categories") setSelectedCategory("");
    else setSelectedCategory(data);
  };
  const filterdData = selectedCategory
    ? expense.filter((item) => item.category === selectedCategory)
    : expense;
  return (
    <>
      <CreateExpense onFormSubmit={submitForm} />
      <ManageExpense
        expense={filterdData}
        onCatSerachChange={onCatSerachChange}
      />
    </>
  );
};

export default ExpenseTracker;
