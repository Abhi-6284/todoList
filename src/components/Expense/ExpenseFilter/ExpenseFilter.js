import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

    const dropdownChangeHandler = e => {
        props.onChangeFilter(e.target.value);
    }

    return (
        <div className='expensesFilter'>
            <div className='expensesFilterControl'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler} style={{outlineStyle:"none"}}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='showAll'>Show All</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;