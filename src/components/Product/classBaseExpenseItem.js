import React, { Component } from 'react'
import './css/ExpenseItem.css'

// const ExpenseItem = (props) => {
//   return (
//     <div className='expenseItem'>
//       <div className='ecpenseItemDate'>{props.date}</div>
//       <div className='expenseItemDescription'>
//         <h2>{props.title}</h2>
//         <p className='expenseItemPrice'>${props.amount}</p>
//       </div>
//     </div>
//   );
// }

class classBaseExpenseItem extends Component {
  render(props) {
    return (
      <div className='expenseItem'>
        <div className='ecpenseItemDate'>s{props.date}</div>
        <div className='expenseItemDescription'>
          <h2>s{props.title}</h2>
          <p className='expenseItemPrice'>s${props.amount}</p>
        </div>
      </div>
    );
  }
}

export default classBaseExpenseItem;
