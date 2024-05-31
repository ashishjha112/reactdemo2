import { useRef } from "react";

interface Expense {
  expenseID: number;
  itemName: string;
  category: string;
  itemAmount: number;
}

interface Props {
  expense: Expense[];
  onCatSerachChange: (data?: string) => void;
}
const ManageExpense = ({ expense, onCatSerachChange }: Props) => {
  const catRef = useRef<HTMLSelectElement>(null);
  const handleSelectChange = () =>
    onCatSerachChange(
      catRef.current?.options[catRef.current?.selectedIndex].text
    );
  return (
    <div className="mt-3">
      <select
        ref={catRef}
        onChange={handleSelectChange}
        defaultValue={"DEFAULT"}
        className="form-select"
      >
        <option value="DEFAULT">All Categories</option>
        <option value="1">Dairy</option>
        <option value="2">Sports</option>
        <option value="3">Fruits</option>
      </select>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th scope="col">Item Name</th>
            <th scope="col">Item Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expense &&
            expense.map((data) => (
              <tr key={data.expenseID}>
                <td>{data.itemName}</td>
                <td>{data.itemAmount}</td>
                <td>{data.category}</td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageExpense;
