import React from 'react';
// import React from 'react';

// Call Function
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';

// Call CSS styles
import './ExpenseItem.css';
import '../ExpenseButton/ExpenseButton';

const ExpenseItem = (props) => {
  let title = props.title;
  return (
    <Card className='expenseItem'>
      <ExpenseDate
        date={props.date}
      />
      <div className='expenseItemDescription'>
        <h2>{title}</h2>
        <Card className='expenseItemPrice'>$&nbsp;{props.amount}</Card>
      </div>
    </Card>
  );
}

export default ExpenseItem;
