import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";

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
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.key}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                    
                ))}

            </Card>
        </div>
    )
}

export default Expenses;