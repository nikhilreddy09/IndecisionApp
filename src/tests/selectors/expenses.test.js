import selectExpenses from '../../selectors/expenses'
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

test('should filter by text value' , () => {
    const filters = {
        text : 'e',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    }
    const action = selectExpenses(expenses,filters)
    expect(action).toEqual([
        expenses[2],
        expenses[0]
    ])
})

test('should filter by start date', () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : moment(0),
        endDate : undefined
    }
    const action = selectExpenses(expenses,filters)
    expect(action).toEqual([
        expenses[2],
        expenses[0]
    ])
})

// test('should filter by end date', () => {
//     const filters = {
//         text : '',
//         sortBy : 'date',
//         startDate : undefined,
//         endDate : moment(10000)
//     }
//     const action = selectExpenses(expenses,filters)
//     expect(action).toEqual([
//         expenses[0]
//     ])
// })

test('should sort by date', () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    }
    const action = selectExpenses(expenses,filters)
    expect(action).toEqual([
        expenses[2],
        expenses[0],
        expenses[1]
    ])
})


test('should sort by amount', () => {
    const filters = {
        text : '',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    }
    const action = selectExpenses(expenses,filters)
    expect(action).toEqual([
        expenses[2],
        expenses[1],
        expenses[0]
    ])
})



