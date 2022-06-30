import NewExpense from "./components/newExpense/NewExpense";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/newExpense/NotFound";
import { Redirect, Route, Switch } from "react-router-dom";
import { AllExpenses } from "./components/newExpense/AllExpenses";
import { ExpensesDetail } from "./components/newExpense/ExpensesDetail";
import Layout from "./components/Layout/Layout";

function App() {
  return (
   
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/expenses" />
          </Route>

          <Route path="/expenses" exact>
            <AllExpenses />
          </Route>

          <Route path="/new-expenses">
            <NewExpense />
          </Route>

          <Route path="/expenses/:expensesId">
            <ExpensesDetail />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
   
  );
}

export default App;

//ReactDom
