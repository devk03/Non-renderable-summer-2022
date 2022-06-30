import React, { useState } from "react";
import "./NewExpense.css";
import ButtonConditionalLogic from "./ButtonConditionalLogic.js";
const NewExpense = (props) => {
  const [displayConditional, setDisplayConditional] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <ButtonConditionalLogic
      displayConditional={displayConditional}
      setDisplayConditional={setDisplayConditional}
      saveExpenseDataHandler={saveExpenseDataHandler}
    />
  );
};

export default NewExpense;
