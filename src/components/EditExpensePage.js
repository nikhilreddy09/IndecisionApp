import React from "react";
import {connect} from 'react-redux'
import ExpenseForm  from './ExpenseForm'
import {editExpense , removeExpense} from '../actions/expenses'
const EditExpensePage = (props) => {
    console.log(props)
    return (
            <div>
                <ExpenseForm 
                expense = {props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id,expense))
                    props.history.push('/Home')
                    console.log('updated',expense)
                }} />
            <button
            onClick={() => {
                props.dispatch(removeExpense(props.expense.id))
                props.history.push('/Home')
            }}
            >
            Remove Expense    
            </button>
            </div>
        )
}
const mapStateToProps = (state,props) => {
    return {
        expense : state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}
export default connect(mapStateToProps)(EditExpensePage)