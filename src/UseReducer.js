import { useReducer } from 'react';
import { useContext } from 'react';
import CounterContext from './CounterContext';


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

const Display = () => {
    const [counter] = useContext(CounterContext)
    return <div>{counter}</div>
}

const Button = ({type,label}) => {
    const [counter, dispatch] = useContext(CounterContext)
    return (
        <button onClick={() => dispatch({type})}>
            {label}
        </button>
    )
}

const UseReducer = () => {
    const [counter, counterDispatch] = useReducer(counterReducer, 0)

    return (
        <CounterContext.Provider value={[counter, counterDispatch]}>
            <h1>UseReducer</h1>
            <Display counter={counter}/>
            <div>
                <Button dispatch={counterDispatch} type='INCREMENT' label='+'/>
                <Button dispatch={counterDispatch} type='DECREMENT' label='-'/>
                <Button dispatch={counterDispatch} type='ZERO' label='reset'/>
            </div>
        </CounterContext.Provider>
    )
}

export default UseReducer