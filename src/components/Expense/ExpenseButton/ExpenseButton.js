import React, { useState } from 'react';
import './ExpenseButton.css';

const ExpenseButton = (props) => {

    const [title, setTitle] = useState(props.title);
    
    const classes = 'expenseButton '
    const clickHandle = () => {
        setTitle("Updated!!!!");
        console.log("You have Clicked " + title);
    }
    return (
        <button className={classes} onClick={clickHandle}>Click Me</button>
    )
}

export default ExpenseButton;