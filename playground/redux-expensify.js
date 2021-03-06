import {createStore,combineReducers} from 'redux';
import{v4 as uuid} from 'uuid';

//ADD EXPENSE
//action generators. 
const addExpense = ({description = '',note = '',amount = 0, createdAt = 0} = {}) => ({
    type : 'ADD_EXPENSE',
    expense : {
        id : uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({id} = {}) => ({
    type : 'REMOVE_EXPENSE',
    id
})

const editExpense = ({id},updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter = (text = '') => ({
    type : 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type : 'SORT_BY_AMOUNT',
    sortBy : 'amount'
})

const sortByDate = () => ({
    type : 'SORT_BY_DATE',
    sortBy : 'date'
})

const setStartDate = (startDate = undefined) => ({
    type :'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type : 'SET_END_DATE',
    endDate
})


//default values.
const expensesReducerDefaultState = []
const filtersReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
}


//reducers creation
const expensesReducer = (state = expensesReducerDefaultState , action) => {
    switch(action.type){
        case 'ADD_EXPENSE' :
            return [
                ...state,
                action.expense
            ]
            break;
        case 'REMOVE_EXPENSE' : 
            return state.filter(({id}) => id!==action.id )
            break;
        case 'EDIT_EXPENSE' :
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default : 
            return state
    }
}

const filtersReducer = (state = filtersReducerDefaultState,action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER' :
            return {
                ...state,
                text : action.text
            }
        case 'SORT_BY_AMOUNT' :
            return {
                ...state,
                sortBy : action.sortBy
            }
        case 'SORT_BY_DATE' :
            return {
                ...state,
                sortBy : action.sortBy
            }
        case 'SET_START_DATE' :
            return {
                ...state,
                startDate : action.startDate
            }
        case 'SET_END_DATE' :
            return {
                ...state,
                endDate : action.endDate
            }
        default :
            return state
    }
}


//get visible expenses 

const getVisibleExpenses = (expenses , {text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch =  typeof endDate !== 'number' || expense.createdAt >= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }
        if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })
}


//store creation with combine reducers.
const store = createStore(
    combineReducers({
        expenses : expensesReducer,
        filters : filtersReducer
    })
    );

store.subscribe(()=> {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
})

const expenseone = store.dispatch(addExpense({ description : 'rent', amount : 100 , createdAt : -1000}))

// // store.dispatch(removeExpense({id : expenseone.expense.id}))

const expensetwo = store.dispatch(addExpense({ description : 'ps4', amount : 1000,createdAt : 1000}))

// store.dispatch(editExpense({id : expensetwo.expense.id},{amount : 2000}))

// store.dispatch(addExpense({ description : 'ps5', amount : 2100}))


// store.dispatch(setTextFilter('rent'))
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))

// store.dispatch(setStartDate())
// store.dispatch(setEndDate(125000))




//demostate.
const demoState = {
    expenses : [{
        id : '123',
        description : 'rent',
        note : 'final payment',
        amount : 54500,
        createdAt : 0
    }],
    filters : {
        text : 'rent',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    }
}