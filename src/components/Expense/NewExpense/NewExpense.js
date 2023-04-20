import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
    
    const [show, setShow] = useState(false);

    const onClickStartHandle = () => {
        setShow(true);
    }
    const onClickStopHandle = () => {
        setShow(false);
    }

    const onSubmitDataHandle = (enteredExpenseData) => {
        const expData = {
            ...enteredExpenseData,
            id: (Math.round(Math.random()*900000)+100000).toString()
        }
        props.onSubmitDataApp(expData);
        setShow(false);
    }

    return (
        <div className="newExpense">
            {!show && <button onClick={onClickStartHandle}> Add New Expense</button>}
            {show && <ExpenseForm onClick={onClickStopHandle} onSubmitData={onSubmitDataHandle} />}
        </div>
    )
}

export default NewExpense;