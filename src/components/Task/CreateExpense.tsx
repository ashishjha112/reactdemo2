import { useForm } from "react-hook-form";
import { FormData } from "./Utility";

interface Props {
  onFormSubmit: (data: FormData) => void;
}

const CreateExpense = ({ onFormSubmit }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-3">
        <label htmlFor="itemName" className="form-label">
          ItemName
        </label>
        <input
          {...register("itemName")}
          type="text"
          id="itemName"
          className="form-control"
        />
        <input
          {...register("expenseID")}
          type="hidden"
          value={0}
          id="expenseID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="itemAmount" className="form-label">
          ItemAmount
        </label>
        <input
          {...register("itemAmount")}
          type="number"
          id="itemAmount"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          defaultValue={"DEFAULT"}
          className="form-select"
        >
          <option value="DEFAULT"></option>
          <option value="Dairy">Dairy</option>
          <option value="Sports">Sports</option>
          <option value="Fruits">Fruits</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreateExpense;
