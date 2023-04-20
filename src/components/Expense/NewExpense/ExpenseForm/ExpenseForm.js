import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        // id: Math.round(Math.random() * 90000 + 10000),
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setUserInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(userInput);
        props.onSubmitData(userInput)
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="newExpenseControls">
                <div className="newExpenseControl">
                    <label>Title</label>
                    <input type="text" name="enteredTitle" placeholder="Title" value={userInput.enteredTitle} onChange={handleChange} />
                </div>
                <div className="newExpenseControl">
                    <label>Amount</label>
                    <input type="number" name="enteredAmount" placeholder="Amount" value={userInput.enteredAmount} onChange={handleChange} />
                </div>
                <div className="newExpenseControl">
                    <label>Date</label>
                    <input type="date" name="enteredDate" placeholder="Date" value={userInput.enteredDate} onChange={handleChange} />
                </div>
            </div>
            <div className="newExpenseActions">
                <button
                    type="submit"
                >
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;