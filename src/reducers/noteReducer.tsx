import { createStore } from "redux"

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


export default noteReducer