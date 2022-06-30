
import {getSingleExpenses} from '../../api/ExpensesServise'
import useHttp from '../../hooks/useHttp';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import HighlightedExpenses from '../expenses/HilightedExpenses';
import moment from 'moment';

export const ExpensesDetail = () => {


 
  const params = useParams();
  const {sendRequest,status,data,error } = useHttp(getSingleExpenses, true);

  const { expensesId } = params;
console.log(expensesId);
  useEffect(() => {
    sendRequest(expensesId);
  }, [expensesId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    
    );
  }
 
  if (error) return <p className="centered">{error}</p>;

  if (!data.title&&!data.date&&data.amount) {
    return <p className="centered">Expenses Not Found</p>;
  }
  const momentDate=moment(data.date).utc().format('YYYY-MM-DD')
  return(<section> <HighlightedExpenses title={data.title} date={momentDate} amount={data.amount}/></section>)
   
  
};
