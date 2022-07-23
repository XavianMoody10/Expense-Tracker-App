import "./Add.css";
import { useState } from "react";

const Add = (props) => {
  const [select, setSelect] = useState("Bills");
  const [value, setValue] = useState("");

  const getSelectValue = (e) => {
    setSelect(e.target.value);
  };

  const getAmountValue = (e) => {
    setValue(e.target.value);
  };

  const getDataHandler = (e) => {
    e.preventDefault();
    setValue("");
    props.getFormData(value, select);
  };

  return (
    <div className="add-container">
      <h2 className="form-title">ADD EXPENSES</h2>

      <form className="add-form" method="post">
        <input
          onChange={getAmountValue}
          type="number"
          min={0}
          step="0.01"
          value={value}
        ></input>

        <select onChange={getSelectValue} value={select}>
          <option value="Bills">Bills/Utilities</option>
          <option value="School">School</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        <button onClick={getDataHandler}>Add Expense</button>
      </form>
    </div>
  );
};

export default Add;
