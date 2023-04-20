import React, { useState } from 'react';
import ExpenseItem from './components/Expense/ExpenseItem/ExpenseItem';
import Card from './components/UI/Card/Card';
import NewExpense from './components/Expense/NewExpense/NewExpense';
import './components/Expense/NewExpense/NewExpense.css'
import ExpensesFilter from './components/Expense/ExpenseFilter/ExpenseFilter';
import ExpenseChart from './components/Expense/ExpenseCharts/ExpenseCharts';

const dummy_expenses = [
  {
    id: Math.round(Math.random() * 9999)+1000,
    title: 'Expense1',
    date: new Date(2020, 10, 10),
    amount: 520
  },
  {
    id: Math.round(Math.random() * 9999)+1000,
    title: 'Expense2',
    date: new Date(),
    amount: 220
  }
];

const App = () => {
  // const formattedDate = new Date();
  // const formattedDate = new Date().toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

  const [getData, setGetData] = useState(dummy_expenses)
  const [filterYear, setFilterYear] = useState('2020');


  const onSubmitDataAppHandle = (data) => {
    setGetData(prevExpenses => {
      return [{
        id: `${data.id}`,
        title: `${data.enteredTitle}`,
        date: new Date(`${data.enteredDate}`),
        amount: data.enteredAmount
      }, ...prevExpenses]
    });
  }
  console.log(getData);
  const filterExpenses = getData.filter(expense => {
    if (filterYear === 'showAll') {
      return expense;
    }else{
      
      return expense.date.getFullYear().toString() === filterYear
    }
  })
  
  console.log("filterExpenses");
  console.log(filterExpenses);
  const filterOnChangeYearHandler = selectedYear => {
    setFilterYear(selectedYear);
  }

  return (
    <div>
      <h2>Todo, List</h2>
      <Card>
        <NewExpense onSubmitDataApp={onSubmitDataAppHandle} />
      </Card>
      <Card className='mainContainer'>
        <ExpenseChart expenses={filterExpenses} />
        <ExpensesFilter selected={filterYear} onChangeFilter={filterOnChangeYearHandler} />
        {filterExpenses.length <= 0
          ? (<h2>No Expense Found</h2>)
          : (filterExpenses.map((expense) => (

            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          )))
        }
      </Card>
      <h2>Class Base Function</h2>
    </div>
  );
}

export default App;
