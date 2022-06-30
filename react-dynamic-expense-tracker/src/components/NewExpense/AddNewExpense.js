import React from "react";
import "./NewExpense.css";
const AddNewExpense = (props) => {
    const clickHandler = () => {
        props.setDisplayConditional(true);
    }
  return <button onClick={clickHandler} className="new-expense">Add New Expense</button>;
};
export default AddNewExpense;
//props.displayConditionalChanger to change state 