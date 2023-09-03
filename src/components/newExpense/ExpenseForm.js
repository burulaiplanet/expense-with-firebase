import { useState } from "react";
import "./ExpenseForm.css";
import { Prompt } from "react-router-dom";

function ExpenseForm(props) {

  const [isEntering, setIsEntering] = useState(false)
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onAddData(expenseData);
  };

  const formFocusedHandler = () => {
    console.log('focus!')
    setIsEntering(true)
  }
  const finishEnteringData = () => {
    setIsEntering(false)
  }
  return (
    <>
    <Prompt when={isEntering} message={() => 'Are you sure?'} />
    <form  onFocus={formFocusedHandler} onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amout</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={finishEnteringData} >Add Expense</button>
      </div>
    </form>
    </>
  );
}
export default ExpenseForm;
