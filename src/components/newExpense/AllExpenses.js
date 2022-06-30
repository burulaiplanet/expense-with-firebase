
import Expenses from '../expenses/Expenses'
import { fetchExpensesHandler } from "../../api/ExpensesServise";
import NotFound from "./NotFound";
import LoadingSpinner from '../UI/LoadingSpinner'
import useHttp from "../../hooks/useHttp";
import { useEffect } from "react";
export const AllExpenses = () => {
  const { sendRequest, status, data, error } = useHttp(fetchExpensesHandler, true);

  useEffect(() => {
    sendRequest();
  }, []);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && (!data || data.length === 0)) {
    return <NotFound />;
  }
  return <Expenses expenses={data}/>
};
