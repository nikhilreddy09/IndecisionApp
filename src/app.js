import React from "react";
import ReactDOM from "react-dom";
// import IndecisionApp from "./components/IndecisionApp";
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import AppRouter from './Routers/AppRouter'
import configureStore from './stores/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter}from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

store.dispatch(addExpense({ description : 'water bill', amount : 300 , createdAt : -1000}))
store.dispatch(addExpense({ description : 'current bill', amount : 100 , createdAt : -1000}))
// store.dispatch(addExpense({ description : 'rent', amount : 50 , createdAt : 1000}))
// store.dispatch(setTextFilter('bill'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('water'))
// },5000)


// const state = store.getState()
// console.log(getVisibleExpenses(state.expenses , state.filters))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("id1"));
