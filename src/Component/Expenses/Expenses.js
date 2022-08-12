import React, { useState } from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFiteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFiteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense =>{
        return(expense.date.getFullYear().toString() === filteredYear)
    })
    
    // ko co value 
    console.log("props.items", props.items)
    return (
        <div>

            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />

            </Card>
        </div>
    )
}

export default Expenses;