import React, {useReducer} from 'react'

const initialState = {
    count : 0,
    countTwo : 10
}

const reducer = (currentState, action) => {
    switch(action.type){
        case 'increment':
            return {...currentState, count : currentState.count + action.value}
        case 'decrement':
            return {...currentState, count : currentState.count - action.value}
        case 'increment countTwo':
            return {...currentState, countTwo : currentState.countTwo + action.value}
        case 'decrement countTwo':
            return {...currentState, countTwo : currentState.countTwo - action.value}
        case 'reset':
            return initialState
        default :
            return currentState
    }
}

function CounterTwo() {
    const [newState, dispatch] = useReducer(reducer, initialState)
    
    return (
        <div>
            <div>
                <h3>Count - {newState.count}</h3>
                <button onClick={() => dispatch({type:'increment', value : 1})}>Increment</button>
                <button onClick={() => dispatch({type:'decrement', value : 1})}>Decrement</button>
                <button onClick={() => dispatch({type:'increment', value : 5})}>Increment 5</button>
                <button onClick={() => dispatch({type:'decrement', value : 5})}>Decrement 5</button>
            </div>
            <div>
                <h3>CountTwo - {newState.countTwo}</h3>
                <button onClick={() => dispatch({type:'increment countTwo', value : 1})}>Increment</button>
                <button onClick={() => dispatch({type:'decrement countTwo', value : 1})}>Decrement</button>
                <button onClick={() => dispatch({type:'increment countTwo', value : 5})}>Increment 5</button>
                <button onClick={() => dispatch({type:'decrement countTwo', value : 5})}>Decrement 5</button>
            </div>
            
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo
