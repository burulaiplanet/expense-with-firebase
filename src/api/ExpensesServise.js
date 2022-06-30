const FIREBASE_DOMAIN = "https://expenses-bb8f5-default-rtdb.firebaseio.com";

export async function addExpensesHandler(objectWithId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/expenses.json`, {
    method: "POST",
    body: JSON.stringify(objectWithId),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export const fetchExpensesHandler = async () => {
  const response = await fetch(`${FIREBASE_DOMAIN}/expenses.json`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  console.log(data);
  const expenses = [];
  for (let key in data) {
    const datasObj = {
      id: key,
      title: data[key].title,
      amount: data[key].amount,
      date: new Date(data[key].date),
    };

    expenses.push(datasObj);
  }
  return expenses;
};

export async function getSingleExpenses(expensesId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/expenses/${expensesId}.json`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch expenses.');
    }
  

    const loadedExpenses= {
      id: expensesId,
      ...data,
     
  
    };
  
    return loadedExpenses;
  }
