import React from "react";
import ExpenseForm from "./ExpenseForm";
import AddNewExpense from "./AddNewExpense";
import "./NewExpense.css";
const ButtonConditionalLogic = (props) => {
  if (props.displayConditional) {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={props.saveExpenseDataHandler}
        setDisplayConditional={props.setDisplayConditional} />
      </div>
    )
  } else {
    return (
      <div className="new-expense">
        <AddNewExpense
            displayConditional={props.displayConditional}
            setDisplayConditional={props.setDisplayConditional}
        />
      </div>
    );
  }
};
export default ButtonConditionalLogic;
