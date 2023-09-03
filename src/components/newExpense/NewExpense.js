import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useHistory } from 'react-router-dom';
import useHttp from '../../hooks/useHttp';
import { addExpensesHandler } from '../../api/ExpensesServise';
import { useState,useEffect } from 'react';
// import { useHistory } from "react-router-dom";
const NewExpense = (props) => {
  const history = useHistory();
  const [errorState, setErrorState] = useState()
  const {sendRequest, status, error } = useHttp(addExpensesHandler)

  useEffect(() => {
    if(status==='completed' && error ) {
        setErrorState(error)
        return
    }
    if(status==='completed') {
      history.push("/expenses");
    }
  }, [status, error])

  const AddData = (data) => {
    const objectWithId = {
      ...data,
      id: Math.random().toString(),
    };
    sendRequest(objectWithId)
    // props.onAddDataToArray(objectWithId)
  };

 
  return (
    <div className="new-expense">
      <ExpenseForm  error={errorState} onAddData={AddData} />
    </div>
  );
};
export default NewExpense;
