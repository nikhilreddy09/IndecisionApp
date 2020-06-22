import expensesReducer from '../../reducers/expenses'
import moment from 'moment'
const expenses = [{
    id : '1',
    description : 'rent',
    note : '',
    amount : 195,
    createdAt : 0
},{
    id : '2',
    description : 'gum',
    note : '',
    amount : 1095,
    createdAt : moment(0).subtract(4,'days').valueOf()
},
{
    id : '3',
    description : 'credit',
    note : '',
    amount : 109500,
    createdAt : moment(0).add(4,'days').valueOf()
}
]

test('should set default state',() => {
    const state = expensesReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id',() => {
    const state = expensesReducer(expenses, {
        type : 'REMOVE_EXPENSE',
        id : expenses[0].id
    })

    expect(state).toEqual([
        expenses[1],
        expenses[2]
    ])
})

test('should add expense',() => {
    const a = {
        id : '5',
            description : 'reeent',
            note : '',
            amount : 1195,
            createdAt : 10
    }
    const state = expensesReducer(expenses,{
        type : 'ADD_EXPENSE',
        expense : a
    })
    expect(state).toEqual([
        ...expenses,
        a
    ])
})

test('should edit expense',() => {
    const state = expensesReducer(expenses,{
        type : 'EDIT_EXPENSE',
        id : '-1'
    })
    expect(state).toEqual(expenses)
})