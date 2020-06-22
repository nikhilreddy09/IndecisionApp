import { addExpense,editExpense,removeExpense} from '../../actions/expenses'

test('should setup remove expense action object',() => {
    const action = removeExpense(123456);
    expect(action).toEqual({
        type : 'REMOVE_EXPENSE',
        id : 123456
    })
})

test('should setup edit expense action object',() => {
    const action = editExpense({ id : '123'},{note : "hello"});
    expect(action).toEqual({
        type : 'EDIT_EXPENSE',
        id : '123',
        updates : {
            note : "hello"
        }    
    })
})

test('should setup add expense action object', () => {
    const expenseData = {description : 'rent',note : 'hey',amount : 100, createdAt : 100}
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            id : expect.any(String),
            description : 'rent',
            note : 'hey',
            amount : 100,
            createdAt : 100
        }
    })
})

test('should setup add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            id : expect.any(String),
            description : 'unknown',
            note : 'unknown',
            amount : 0,
            createdAt : 0
        }
    })
})