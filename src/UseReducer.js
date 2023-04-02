import { useReducer } from 'react';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'ZERO':
            return 0;
        default:
            return state;
    }
}

const UseReducer = () => {
    const [counter, counterDispatch] = useReducer(counterReducer, 0)

    return (
        <div>
            <h1>UseReducer</h1>
            <div>{counter}</div>
            <div>
                <button onClick={() => counterDispatch({ type: 'INCREMENT' })}>+</button>
                <button onClick={() => counterDispatch({ type: 'DECREMENT' })}>-</button>
                <button onClick={() => counterDispatch({ type: 'ZERO' })}>reset</button>
            </div>
        </div>
    )
}

export default UseReducer