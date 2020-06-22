import {createStore} from 'redux'

const incrementCount = ({incrementBy = 1}={}) => ({
    type : 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type : 'DECREMENT',
    decrementBy
})

const setCount = ({setBy : count = 0 } = {}) => ({
    type : 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET',
    count : 0
}) 

const countReducer = (state = { count : 0}, action) => {
    switch (action.type){
        case 'INCREMENT': 
            return {
            count:state.count +action.incrementBy
        };
        break;
        case 'DECREMENT': 
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return {
            count:state.count - decrementBy
        }
        break;
        case 'RESET': return {
            count: 0
        }
        case 'SET': return {
            count: action.count
        }
        default:
            return state;
    }
}

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy : 10}))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy : 10}))

store.dispatch(setCount({setBy : 100}))