import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createStore } from 'redux'

interface Action {
  type: string
  payload?: any
}



const noteReducer = (state: any[] = [], action: Action) => { 
  if (action.type === 'NEW_NOTE') {
    return state.concat(action.payload)
  }

  return state
}

const store = createStore(noteReducer)


store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    content: 'the app state is in redux store',
    important: true,
    id: 1
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    content: 'state changes are made with actions',
    important: false,
    id: 2
  }
})
const AppVirtual = () => {

  return (
    <div>
      <ul>
        {store.getState().map(note =>
          <li key={note.id}>
            {note.content} <strong>{note.important ? 'important': ''}</strong>
          </li>)}
      </ul>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const renderApp = () => {
  root.render(<AppVirtual />)
}

renderApp()

//subscribe to the store with renderApp and log the store state
store.subscribe(renderApp)
store.subscribe(() => console.log(store.getState()))
