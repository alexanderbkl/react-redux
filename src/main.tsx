import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createStore, Action } from 'redux'

const counterReducer = (state = 0, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}

const store = createStore(counterReducer)


const AppVirtual = () => {
  return (
    <div>
      <div>
        {store.getState()}
      </div>
      <button 
        onClick={e => store.dispatch({ type: 'INCREMENT' })}
      >
        plus
      </button>
      <button
        onClick={e => store.dispatch({ type: 'DECREMENT' })}
      >
        minus
      </button>
      <button 
        onClick={e => store.dispatch({ type: 'ZERO' })}
      >
        zero
      </button>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const renderApp = () => {
  root.render(<AppVirtual />)
}

renderApp()

store.subscribe(renderApp)
