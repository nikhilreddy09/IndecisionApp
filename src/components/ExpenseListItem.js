import React from "react";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {removeExpense} from '../actions/expenses';
 const ExpenseListItem = (props) => (
    <div>
    <Link to={`/edit/${props.expense.id}`}>
        <h3>{props.expense.description}</h3>
    </Link>
    <p>Amount : {props.expense.amount}</p>
    <p>Created At : {props.expense.createdAt}</p>
    
    </div>
)
export default ExpenseListItem;