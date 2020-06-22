import filtersReducer from '../../reducers/filters'
import moment from 'moment'
test('should setup default filter values',() => {
    const state = filtersReducer(undefined,{type : '@@INIT'})
    expect(state).toEqual({
        text : '',
        sortBy : 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    })
})

test('should setup amount as sort by',() => {
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should setup date as sort by',() => {
    const state = filtersReducer(undefined,{type:'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})

test('should set the start date',() => {
    const state = filtersReducer(undefined,{type:'SET_START_DATE',startDate:1200})
    expect(state.startDate).toBe(1200)
})

test('should set the end date',() => {
    const state = filtersReducer(undefined,{type:'SET_END_DATE',endDate:1200})
    expect(state.endDate).toBe(1200)
})