import React from 'react';

import './ExpenseDate.css';
import Card from '../../UI/Card/Card';

const ExpenseDate = (props) => {
    const date = props.date;
    return (
        <Card className='ecpenseItemDate'>
            <div className='expenseDateMonth'>{date.toLocaleString('en-US', { month: 'short' })}</div>
            <div className='expenseDateYear'>{date.toLocaleString('en-US', { year: 'numeric' })}</div>
            <div className='expenseDateDay'>{date.toLocaleString('en-US', { day: 'numeric' })}</div>
        </Card>
    );
}

export default ExpenseDate;